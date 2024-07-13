import React from "react";
import "../App";
import { useState } from "react";

const SimpleState = () => {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((count) => count + 1);
  }
  function handleSub() {
    setCount((count) => count - 1);
  }

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={() => handleAdd()} className="add">
          Add
        </button>
        <button onClick={() => handleSub()} className="sub">
          Sub
        </button>
        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default SimpleState;
