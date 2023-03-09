import React from "react";

export default function Comparison(props){
    return(
        <>
            <div className="companyBox">
                <h1>{props.compName}</h1>
                <div>You send</div>
                <div>{props.valor}</div>
                <div>Australian Dollar</div>
                <div>- Our fee</div>
                <div>{props.fee}</div>
                <div>Recipient gets</div>
                <div>{props.valor - 5}</div>
                <div>Brazilian Real</div>
                It will take
                <div>30 days to arrive</div>
                <br />
            </div>
        </>   
    )

}