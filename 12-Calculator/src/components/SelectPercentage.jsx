const SelectPercentage = ({
  children,
  satisfactionValue,
  onSatisfied,
  billAmount,
  onAverage,
}) => {
  function handleSatisfaction(e) {
    const percentageOfNo = (Number(e.target.value) / 100) * Number(billAmount);
    console.log(percentageOfNo);
    onSatisfied(() => percentageOfNo);
  }

  return (
    <div>
      <label htmlFor="satisfaction">{children}</label>
      &nbsp; &nbsp;
      <select
        id="satisfaction"
        value={satisfactionValue}
        onChange={handleSatisfaction}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
      &nbsp; &nbsp;
      <span>{satisfactionValue}</span>
    </div>
  );
};

export default SelectPercentage;
