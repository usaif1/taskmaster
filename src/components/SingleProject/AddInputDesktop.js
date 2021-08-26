//dependencies
import React, { useState } from "react";
import { Check, X } from "react-feather";

//actions
import { addTask, updateSingleList } from "actions/dbActions";

//imports
import { Container } from "components/common";
import { useStyles } from "./styles";

const AddInputDesktop = ({ id, tasks, setTasks }) => {
  const classes = useStyles();

  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const onClickHandler = (e) => {
    e.stopPropagation();
    setShow(true);
  };

  const addNewTask = (e) => {
    e.preventDefault();
    if (!value) {
      setError("Cannot add empty task");
      return;
    }

    const newTask = addTask(value, id);
    const newArr = tasks.pending;
    newArr.unshift(newTask);

    updateSingleList("pending", newArr, id); //to maintain order of tasks

    setTasks({
      ...tasks,
      pending: newArr,
    });
    setValue("");
    setError("");
  };

  const closeHandler = () => {
    setShow(false);
    setError("");
  };

  return (
    <Container>
      <div className={classes.addTaskWrapper}>
        <button disabled={show} className={`${classes.addTask} ${show && classes.fadeOut}`} onClick={onClickHandler}>
          +
        </button>
        <div className={`${classes.addTaskContainer} ${show && classes.fadeIn}`}>
          <input
            type="text"
            className={`${classes.addTaskInput} ${show && classes.fadeIn}`}
            placeholder="Add New Task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={addNewTask} className={classes.btnAdd}>
            <Check size={20} color="green" strokeWidth={2.5} />
          </button>
          <button onClick={closeHandler} className={classes.btnAdd}>
            <X size={20} color="red" strokeWidth={2.5} />
          </button>
        </div>
      </div>
      {error && <p>{error}</p>}
    </Container>
  );
};

export default AddInputDesktop;
