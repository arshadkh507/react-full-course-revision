import React from "react";

const TaskCard = (props) => {
  const { info, singleTask, handleDelete } = props;
  const { id, name, completed } = singleTask;
  return (
    <>
      <li key={id} className={completed ? "completed" : "incompleted"}>
        <span>
          {id} - {name}-{info}
        </span>
        <button className="delete" onClick={() => handleDelete(id)}>
          delete
        </button>
      </li>
    </>
  );
};

export default TaskCard;
