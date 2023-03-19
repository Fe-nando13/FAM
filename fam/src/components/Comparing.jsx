import React from "react";

export default function Comparing(props) {
  const transferRate = {
    "ARS/AUS": parseFloat(0.0075),
    "ARS/BRL": parseFloat(0.026),
    "ARS/CHP": parseFloat(4.05),

    "AUS/BRL": parseFloat(3.5),
    "AUS/ARS": parseFloat(134.03), 
    "AUS/CHP": parseFloat(543.22),


    "BRL/AUS": parseFloat(0.29),
    "BRL/ARS": parseFloat(38.30),
    "BRL/CHP": parseFloat(155.22),

    "CHP/AUS": parseFloat(0.0019),
    "CHP/ARS": parseFloat(0.25),
    "CHP/BRL": parseFloat(0.0065),
    
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