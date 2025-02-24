import React from 'react'

const Currency = () => {
const API_KEY="cur_live_2dWpDVDHLcwYy5HRZvnGTxwCu8UxzG8IxGRhXRl4";

async function get_Currency(){
  const INR=document.getElementById("baseCurrency").value.trim();
  const currency=document.getElementById("Currency").value.trim();
const URL=`https://api.currencyapi.com/v3/latest?apikey=cur_live_2dWpDVDHLcwYy5HRZvnGTxwCu8UxzG8IxGRhXRl4&currencies=${currency}&base_currency=${INR}`;
const res=await fetch(URL);
const data=await res.json();
console.log(res);
console.log(data);
 const rates=document.getElementById("rates").innerText=data.data.INR.value;


}


  return (
    <>
    <div className='text-amber-500'>currency</div>
    <div className="container">
        <label htmlFor="baseCurrency" >Base Currency</label>
         <input type="text" name="baseCurrency" id="baseCurrency" />
         <label htmlFor="Currency">Currency</label>
         <input type="text" name="Currency" id="Currency"  />
        <button  onClick={get_Currency}>Get Currency</button>
        <div id="rates"></div>
    </div>
    
    </>
  )
}

export default Currency