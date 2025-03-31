import React, { useState } from 'react';

const Currency = () => {
  const API_KEY = "cur_live_2dWpDVDHLcwYy5HRZvnGTxwCu8UxzG8IxGRhXRl4";
  const [rate, setRate] = useState(null);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function get_Currency() {
    const base = document.getElementById("baseCurrency").value.trim();
    const currency = document.getElementById("Currency").value.trim();

    const URL1 = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}`;
    const res1 = await fetch(URL1);
      const data1 = await res1.json();
      const v = data1.data.key;

    
    if (!base || !currency || !amount || amount <= 0) {
      alert("Please provide valid base and target currency.");
      return;
    }
    
    const URL = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&currencies=${currency}&base_currency=${base}`;
    
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);

      if ( data.data[currency]) {
        setRate(data.data[currency].value);
      } else {
        throw new Error("Invalid currency pair or API error.");
      }
    } catch (err) {
      console.error("Error fetching currency data:", err);
      setError("An error occurred while fetching the currency data.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="text-center text-amber-500 text-3xl font-bold py-5">Currency Converter</div>
      <div className="container mx-auto p-6 bg-lime-100 rounded-lg shadow-lg max-w-md">
        <label htmlFor="amount" className="block text-gray-700 font-semibold mb-2">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="baseCurrency" className="block text-gray-700 font-semibold mb-2">Base Currency</label>
        <input
          type="text"
          name="baseCurrency"
          id="baseCurrency"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="Currency" className="block text-gray-700 font-semibold mb-2">Target Currency</label>
        <input
          type="text"
          name="Currency"
          id="Currency"
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={get_Currency}
          disabled={loading}
          className={`w-full p-3 text-white rounded-lg ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          {loading ? "Loading..." : "Get Currency"}
        </button>

        {error && <p className="mt-4 text-red-500">{error}</p>}

        <div id="rates" className="mt-6">
          {rate !== null ? (
            <p className="text-xl font-semibold text-green-600">
              Exchange Rate: {(amount * rate).toFixed(2)}
            </p>
          ) : (
            <p className="text-lg text-gray-600">No rate available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Currency;