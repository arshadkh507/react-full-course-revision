import { useState } from "react";
import BillInput from "./components/BillInput";
import Output from "./components/Output";
import Reset from "./components/Reset";
import SelectPercentage from "./components/SelectPercentage";

export default function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [mySatisfaction, setMySatisfaction] = useState(0);
  const [myFriendSatisfaction, setMyFriendSatisfaction] = useState(0);

  const tipAverage = (mySatisfaction + myFriendSatisfaction) / 2;

  function handleReset() {
    setBillAmount(0);
    setMySatisfaction(0);
    setMyFriendSatisfaction(0);
  }

  return (
    <div>
      <h1>Calculator</h1>
      <BillInput bill={billAmount} onChangeBill={setBillAmount} />
      <br />
      <SelectPercentage
        satisfactionValue={mySatisfaction}
        onSatisfied={setMySatisfaction}
        billAmount={billAmount}
      >
        <span>How did you like the service?</span>
      </SelectPercentage>
      <br />

      <SelectPercentage
        satisfactionValue={myFriendSatisfaction}
        onSatisfied={setMyFriendSatisfaction}
        billAmount={billAmount}
      >
        <span>How did your friend like the service?</span>
      </SelectPercentage>
      <br />
      <br />
      <br />

      {billAmount > 0 && (
        <>
          <Output billAmount={billAmount} tipAverage={tipAverage} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
