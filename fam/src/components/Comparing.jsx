import React from "react";

export default function Comparing(props) {
  const transferRate = {
    "AUS/BRL": 3.5, 
    "AUS/CH": 1111,
    "BRL/AUS": 2222,
    "BRL/CH": 3333,
    "CH/AUS": 4444,
    "CH/BRL": 5555,
  }

  const currencies = props.cf + "/" + props.ct;
  
  const rate = transferRate[currencies]

  let valueConv = props.v * rate
  let feeTotal = props.v * props.fee
  let feeTotalConv = feeTotal * rate
  let youGet = props.v - feeTotal
  let youGetConv = valueConv - feeTotalConv
  

  return (
    <div className="singleComp">
      <h1>{props.cn}</h1>
      
      <div className="companyBox">
      
      <div className="title">
        <p>Currency</p>
        <p>Value</p>
        <p>Fee</p>
        <p>Total Fee</p>
        <p>You get</p>
      </div>
        <div className="currencyFrom">
          
          <p>{props.cf}</p> {/*currency from */}
          <p>{props.v}</p>        {/*value to transfer */}
          <p>{`${props.fee * 100}%`}</p> {/*fee */}
          <p>{feeTotal}</p> {/*fee */}
          <p>{youGet}</p>
        </div>

        <div className="currencyTo">
          <p>{props.ct}</p>  {/*currency TO */}
          {valueConv}        {/*value after converting*/}
          <p>{`${props.fee * 100}%`}</p> {/*fee */}
          <p>{feeTotalConv}</p> {/*fee */}
          
          {youGetConv}
        </div>
      </div>
      
      <p>{props.ctime}</p>
          
      <button className="btnTransfer" onClick={props.result}>Transfer</button>
    </div>
  );
}