//dependencies
import React, { useState, useRef, useEffect } from "react";
import PageVisibility, { usePageVisibility } from "react-page-visibility";
import { Check, X } from "react-feather";

//actions
import { addTask } from "actions/dbActions";

//imports
import { useStyles } from "./styles";

const AddInput = ({ setOpen, open, id, tasks, setTasks }) => {
  const classes = useStyles();

  const isVisible = usePageVisibility();

  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  open && inputRef.current.focus(); // to prevent keyboard from closing after adding a task by focusing on input on every render/re-render

  useEffect(() => {
    open && inputRef.current.focus();

    !open && inputRef.current.blur();
  }, [open, isVisible]);

  const addNewTask = (e) => {
    e.preventDefault();
    if (!value) {
      inputRef.current.focus();
      window.navigator.vibrate(200);
      setError("Cannot add empty task");
      return;
    }

    const newTask = addTask(value, id);
    const newArr = tasks.pending;
    newArr.unshift(newTask);

    setTasks({
      ...tasks,
      pending: newArr,
    });
    setValue("");
    setError("");
  };

  const handleVisibilityChange = () => {
    if (!isVisible) {
      inputRef.current.focus();
      setOpen(false);
    }
  };

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      <div className={`${classes.addInputContainer} ${open ? classes.increaseHeight : ""}`}>
        <form autoComplete="off" className={classes.addInputForm} onSubmit={addNewTask}>
          <input
            autoComplete="off"
            className={classes.input}
            type="text"
            name="newTask"
            placeholder="Add New Task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            ref={inputRef}
          />
          <div className={classes.ctaContainer}>
            <button className={classes.btnAdd} type="submit">
              <Check size={20} color="green" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              className={classes.btnAdd}
              onClick={(e) => {
                e.preventDefault();
                setError("");
                setOpen(false);
              }}
            >
              <X size={20} color="red" strokeWidth={2.5} />
            </button>
          </div>
        </form>
        {error && <p style={{ color: "white" }}>{error}</p>}
      </div>
    </PageVisibility>
  );
};

export default AddInput;
