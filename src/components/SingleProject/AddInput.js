//dependencies
import React, { useState } from "react";

//actions
import { addTask } from "actions/dbActions";

//imports
import { useStyles } from "./styles";

const AddInput = ({ setOpen, open, id, tasks, setTasks }) => {
  const classes = useStyles();

  const [value, setValue] = useState("");

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
      <form onSubmit={addNewTask}>
        <input type="text" name="newTask" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">add task</button>
      </form>
      <button onClick={() => setOpen(false)}>close x</button>
    </div>
  );
};

export default AddInput;
