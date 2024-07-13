import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
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
    <div>
      <h1>TaskList</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map(({ id, name, completed }) => {
            return (
              <li key={id} className={completed ? "completed" : "incompleted"}>
                <span>
                  {id} - {name}
                </span>
                <button className="delete" onClick={() => handleDelete(id)}>
                  delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default App;
