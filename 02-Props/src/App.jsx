import React from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const App = () => {
  const info = "random";
  return (
    <div className="App">
      <Header />
      <TaskList info={info} />
    </div>
  );
};

export default App;
