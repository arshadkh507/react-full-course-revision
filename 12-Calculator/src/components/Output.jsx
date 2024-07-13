const Output = ({ billAmount, tipAverage }) => {
  return (
    <h2>
      You pay ${Number(billAmount) + tipAverage} (${Number(billAmount)} + $
      {tipAverage} tip)
    </h2>
  );
};

export default Output;
