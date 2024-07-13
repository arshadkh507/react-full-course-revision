import { useState } from "react";
import "./app.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  function handleNumberSlider(e) {
    setStep(Number(e.target.value));
  }
  function handleCountChange(e) {
    setCount(Number(e.target.value));
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <h1>Date Counter</h1>

      {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
      <span>Step: {step}</span>
      <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      <input
        type="range"
        name="step"
        id="step"
        min={1}
        max={10}
        onChange={handleNumberSlider}
      />
      <span>{step}</span>
      <br />
      <br />
      <button onClick={() => setCount((c) => c - step)}>-</button>
      <input
        type="number"
        name="count"
        id="count"
        value={count}
        onChange={handleCountChange}
      />
      <button onClick={() => setCount((c) => c + step)}>+</button>
      <br />
      <br />

      <p>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        {date.toDateString()}
      </p>

      {(count !== 0 || step !== 1) && (
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default App;
