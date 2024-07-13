import { useState } from "react";
const BoxCard = (props) => {
  const [show, setShow] = useState(true);
  return (
    <div style={{ display: show ? "block" : "none" }}>
      <div className={`box ${props.result}`}>{props.children}</div>
      <button onClick={() => setShow(!show)} className="trigger">
        Hide
      </button>
    </div>
  );
};

export default BoxCard;
