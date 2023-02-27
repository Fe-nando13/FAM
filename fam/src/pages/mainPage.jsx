import React from "react";
import moneyPlane from'../images/moneyPlane.png'
import './mainPage.css'
import FormCompare from '../components/FormCompare.jsx'

function MainPage(){
    return(
        <div className="container">
            <div className="navLogin">
                <div className="logo">
                    <p>Currency Roll</p>
                    <p>The best way to buy currencies</p>
                </div>
                <div className="loginMenu">
                    <div>login</div>
                </div>
            </div>
            <img class="imagePlane" src={moneyPlane} alt=" " />
            <div className="titleBox">
                <h1 className="titleMain">Get the best rates</h1>
                <h2>We are going to compare the best sites to buy currencies for you in less than 10 seconds</h2>
                <div className="fixedIT">
                    <FormCompare />
                </div>
            </div>   
        </div>
    )
}

export default MainPage;