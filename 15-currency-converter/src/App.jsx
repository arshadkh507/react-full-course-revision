// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [output, setOutput] = useState("");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function convertCurrency() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      // console.log(
      //   `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      // );
      const data = await res.json();
      if (data) {
        // const convertedValue = Object.values(data?.rates)[0];
        const convertedValue = data.rates[toCurrency];
        console.log(convertedValue);
        setOutput(convertedValue);
      }
      setIsLoading(false);
    }

    if (fromCurrency === toCurrency) return setOutput(amount);
    convertCurrency();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>
          OUTPUT: {output} {toCurrency}
        </p>
      )}
    </div>
  );
}
