import React from "react";

export default function Comparing(props) {
  return (
    <div className="singleComp">
      <p>{props.cn}</p>
      <p>You send {props.v}</p>
      <p>{props.cf}</p>
      <p>Fee</p>
      <p>{props.fee}</p>
      <p>{props.fee2}</p>
      <p>You get</p>
      <p>{props.v - props.fee}</p>
      <p>{props.ct}</p>
      <p>Brazilian real</p>
      <button className="btnTransfer" onClick={props.result}>Transfer</button>
    </div>
  );
}