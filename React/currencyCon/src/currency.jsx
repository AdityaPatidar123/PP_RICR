import React, { useState } from 'react';

const Currency = () => {
  const API_KEY = "cur_live_2dWpDVDHLcwYy5HRZvnGTxwCu8UxzG8IxGRhXRl4";
  const [rate, setRate] = useState(null);
  const [amount,setAmount]=useState("");

  async function get_Currency() {
    const base = document.getElementById("baseCurrency").value.trim();
    const currency = document.getElementById("Currency").value.trim();

    if (!base || !currency) {
      alert("Please provide both base and target currency.");
      return;
    }

    const URL = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&currencies=${currency}&base_currency=${base}`;

    try {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);

      // Check if the data contains the rates for the selected currency
      if (data && data.data && data.data[currency]) {
        setRate(data.data[currency].value);
      } else {
        alert("Invalid currency pair or API error.");
      }
    } catch (error) {
      console.error("Error fetching currency data:", error);
      alert("An error occurred while fetching the currency data.");
    }
  }

  return (
    <>
      <div className="text-amber-500">Currency</div>
      <div className="container grid">
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" id="amount" onChange={(e)=>setAmount(e.target.value)} />
        

        <label htmlFor="baseCurrency">Base Currency</label>
        <input type="text" name="baseCurrency" id="baseCurrency" />

        <label htmlFor="Currency">Currency</label>
        <input type="text" name="Currency" id="Currency" />

        <button onClick={get_Currency}>Get Currency</button>

        <div id="rates">
          {rate !== null ? <p>Exchange Rate: {amount*rate}</p> : <p>No rate available</p>}
        </div>
      </div>
    </>
  );
};

export default Currency;