import { useState } from "react";

const BillInput = ({ onChangeBill, bill }) => {
  return (
    <div>
      <label htmlFor="billInput">How much was the bill?</label>
      &nbsp; &nbsp;
      <input
        type="number"
        id="billInput"
        value={bill}
        onChange={(e) => onChangeBill(e.target.value)}
        placeholder="Bill value"
      />
      &nbsp; &nbsp;
      <span>{bill}</span>
    </div>
  );
};

export default BillInput;
