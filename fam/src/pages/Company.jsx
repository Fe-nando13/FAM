import "./company.css"
import React, { useState } from "react";
import Comparing from "../components/Comparing";

// IMPORTAR A LISTA
import companyList from "../components/companyList";
import transactionList from "../components/TransactionsList.js";
import TableTransactions from "../components/TableTransactions";

export default function App() {

  // CRIEI A CONST DA LIST
  const list = companyList();
  const transaction = transactionList();
  
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
    console.log(transaction.transaction.companyName)
  };

  

  return (
    <div className="containerCompany">
      <div className="boxInput">
      
        <h1>Let's transfer it</h1>
        <div className='insideBox'>
        <form className="formInfo"> 
          {/* // -------------------- VALUE FROM -------------------- */}
          <label>
            Type the amount you want to transfer:
            <br></br>
            <br></br>
            <input  placeholder="Type the amount" type="number" onChange={handleChange} />
          </label>

         
          {/* // -------------------- CURRENCY FROM -------------------- */}
          <label>
            Currency From:
            <select defaultValue={currencyFrom} onChange={handleCurrencyFrom}>
              <option value="ARS">Argentinian Peso</option>
              <option value="AUS">Australian Dollar</option>
              <option value="BRL">Brazilian Real</option>
              <option value="CHP">Chilean Peso</option>
            </select>
          </label>
          {/* // -------------------- CURRENCY TO -------------------- */}
          <label>
        
            Currency To:
            <select defaultValue={currencyTo} onChange={handleCurrencyTo}>
              <option value="ARS">Argentinian Peso</option>
              <option value="AUS">Australian Dollar</option>
              <option value="BRL">Brazilian Real</option>
              <option value="CHP">Chilean Peso</option>
            </select>
          </label>

          
          <button onClick={handleSubmit}>Submit</button>
        </form>


        </div>
        
      </div>
      <br></br>
      <h1>{list.companyName}</h1>
      <div className="company">
        {list.map((list) => (
          <Comparing 
            cn={list.companyName}
            cf={currencyFrom}
            v={money}
            fee={list.fee}
            ct={currencyTo}
            ctime={list.time}
            result={() => console.log(list.companyName, list.fee, money, currencyFrom, currencyTo, list.time)}
          />
        ))}
      </div>
      

      <div className="transactionsContainer">
      <h1>TRANSACTIONS</h1>
      <table>
        <tr>
            <th>Company Name</th>
            <th>Currency From</th>
            <th>Value</th>
            <th>Fee</th>
            <th>Total Fee</th>
            <th>Currency To</th>
            <th>Value Converted</th>
            <th>You got</th>
            <th>You got Converted</th>
            <th>Time</th>
        </tr>

          {transaction.map((transaction)=>(
            <TableTransactions 
              compName={transaction.companyName}
              currFrom={transaction.currencyFrom}
              value={transaction.value}
              Fee={transaction.fee}
              totalFee={transaction.totalFee}
              currTo={transaction.currencyTo}
              valueConv={transaction.valueConv}
              youGot={transaction.youGot}
              youGotConv={transaction.youGotConv}
              date={transaction.companyName}
              time={transaction.time}
            />
          ))}
      </table>              
      </div>
    </div>
  );
}