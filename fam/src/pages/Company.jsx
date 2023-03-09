import React from "react";

import FormCompare from '../components/FormCompare.jsx';
import Comparison from "../components/Comparison.jsx";
import companyList from "../components/companyFee.jsx";

import './company.css'

function createCompany(info){
    return <Comparison valor={info.valor} fee={info.fee} compName={info.companyName}/>
}

function Company() {
    const list = companyList()

    var valueFrom = 0;

    const [amount, setAmount] = React.useState();


    function handleChange(event) {
        valueFrom = event.target.value; 
    }

    function handleClick(event) {
        setAmount(valueFrom)
        event.preventDefault();
        console.log(valueFrom)
    }

    return(
        <div className="companyMain">
            <div className="formCompany">
                <FormCompare 
                    handleChange={handleChange}
                    handleClick={handleClick}
                />
            </div>
            
            <br></br>
            {amount}
            <br></br>
            <h1>The best options for you</h1>
            <div>{list.map(createCompany)};</div>
            {/* <Comparison 
                valor={amount}
                fee={10}
            /> */}
        </div>   
    )
}

export default Company;