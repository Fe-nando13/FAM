import "./company.css"

import React, { useState } from "react";
import Comparing from "../components/Comparing";
import companyList from "../components/companyList";

export default function App() {
  const list = companyList();

  // -------------------- VALUE FROM --------------------
  let valueFrom = 1500;
  const [money, setmoney] = useState(1000);
  const handleChange = (event) => {
    valueFrom = event.target.value;
    console.log(valueFrom);
  };

  // -------------------- CURRENCY FROM --------------------
  let currency1 = "";
  const [currencyFrom, setCurrencyFrom] = useState("AUS");
  const handleCurrencyFrom = (event) => {
    currency1 = event.target.value;
    console.log(currency1);
  };
  // -------------------- CURRENCY TO --------------------
  let currency2 = "";
  const [currencyTo, setCurrencyTo] = useState("BR");
  const handleCurrencyTo = (event) => {
    currency2 = event.target.value;
    console.log(currency2);
  };

  // -------------------- SUBMIT --------------------
  const handleSubmit = (event) => {
    event.preventDefault();
    setmoney(valueFrom);
    setCurrencyFrom(currency1);
    setCurrencyTo(currency2);
    console.log(list);
  };

  return (
    <div className="containerCompany">
      <div className="boxInput">
        <h1>Let's transfer it</h1>
        <form>
          {/* // -------------------- VALUE FROM -------------------- */}
          <label>
            Type the amount you want to transfer:
            <br></br>
            <input type="number" onChange={handleChange} />
          </label>

          <br></br>
          <br></br>
          {/* // -------------------- CURRENCY FROM -------------------- */}
          <label>
            Currency From:
            <select defaultValue={currencyFrom} onChange={handleCurrencyFrom}>
              <option value="AUS">Australian Dollar</option>
              <option value="BR">Brazilian</option>
              <option value="CH">Chile</option>
            </select>
          </label>
          {/* // -------------------- CURRENCY TO -------------------- */}
          <label>
          <br></br>
            Currency To:
            <select defaultValue={currencyTo} onChange={handleCurrencyTo}>
              <option value="AUS">Australian Dollar</option>
              <option value="BR">Brazilian</option>
              <option value="CH">Chile</option>
            </select>
          </label>

          <br></br>
          <br></br>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      <br></br>
      <div className="company">
        {list.map((list) => (
          <Comparing 
            cn={list.companyName}
            v={money}
            cf={currencyFrom}
            ct={currencyTo}
            fee={list.fee}
            fee2={money > 100 ? "variavel" : "fixa"}
            result={() => console.log(list.companyName, list.fee, money, currencyFrom, currencyTo)}
          />
        ))}
      </div>
    </div>
  );
}