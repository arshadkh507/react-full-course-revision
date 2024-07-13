import React from "react";
import { useState } from "react";
import TaskCard from "./TaskCard";
import BoxCard from "./BoxCard";

const TaskList = ({ info }) => {
  const [tasks, setTasks] = useState([
    { id: 3123, name: "Record Lecture", completed: true },
    { id: 3224, name: "Edit React Lecture", completed: false },
    { id: 3325, name: "Watch Lecture", completed: false },
  ]);

  const [show, setShow] = useState(true);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <>
      <h1>TaskList {info}</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map((task, index) => {
            return (
              <TaskCard
                key={index}
                info={info}
                singleTask={task}
                handleDelete={handleDelete}
              />
            );
          })}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          numquam.
        </p>
      </BoxCard>
      <BoxCard result="warning">
        <p className="title">Lorem ipsum dolor sit.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          numquam.
        </p>
      </BoxCard>
      <BoxCard result="alert">
        <p className="title">Lorem ipsum dolor sit.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          numquam.
        </p>
      </BoxCard>
    </>
  );
};

export default TaskList;
