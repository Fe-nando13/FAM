import React from "react";

export default function Transactions(props) {
  return (
    <div>
      <p>{props.cn}</p>
      <p>{props.v}</p>
      <p>{props.cf}</p>
      <p>{props.fee}</p>
      <p>{props.fee2}</p>
      <p>{props.v - props.fee}</p>
      <p>{props.ct}</p>
    </div>
  );
}