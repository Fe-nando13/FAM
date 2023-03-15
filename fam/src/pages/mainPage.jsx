import React from "react";
import moneyPlane from'../images/moneyPlane.png'
import './mainPage.css'

// import LOGIN
import {Login} from "./Login.jsx"
import {Register} from "./Register.jsx"
import {useState} from "react"


function MainPage(){

    // import LOGIN
    const [currentForm, setCurrentForm] = useState("Login");

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }


    return(
        <div className="container">
            
            <img className="imagePlane" src={moneyPlane} alt=" " />
            <div className="titleBox">
                <h1 className="titleMain">Get the best rates</h1>
                <h2>We are going to compare the best sites to buy currencies for you in less than 10 seconds</h2>
                <div className="auto-form-container">
                    {currentForm === "login" ? (
                        <Login onFormSwitch={toggleForm} />
                    ) : (
                        <Register onFormSwitch={toggleForm} />
                    )
                }
                    
                </div>
            </div> 
         
        </div>
    )
}

export default MainPage;