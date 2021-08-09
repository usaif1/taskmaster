//dependencies
import React, { useState, useRef, useEffect } from "react";
import { Check, X } from "react-feather";

//actions
import { addTask } from "actions/dbActions";

//imports
import { useStyles } from "./styles";

const AddInput = ({ setOpen, open, id, tasks, setTasks }) => {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    open && inputRef.current.focus();

    !open && inputRef.current.blur();
  }, [open]);

  const addNewTask = (e) => {
    e.preventDefault();
    if (!value) {
      alert("Cannot add empty task");
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
  };

  return (
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
              setOpen(false);
            }}
          >
            <X size={20} color="red" strokeWidth={2.5} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInput;
