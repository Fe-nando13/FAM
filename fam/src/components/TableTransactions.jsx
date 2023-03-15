import React from 'react'


export default function TableTransactions(props){

    return (
        <tbody>
            <td>{props.compName}</td>
            <td>{props.currFrom}</td>
            <td>{props.value}</td>
            <td>{props.Fee}</td>
            <td>{props.totalFee}</td>
            <td>{props.currTo}</td>
            <td>{props.valueConv}</td>
            <td>{props.youGot}</td>
            <td>{props.youGotConv}</td>
            <td>{props.time}</td>
        </tbody>
    )

}