import React from "react";
import moneyPlane from'../images/moneyPlane.png'
import './mainPage.css'

function MainPage(){
    return(
        <div className="container">
            <div className="navLogin">
                <span>
                    <p>Currency Roll</p>
                    <p>The best way to buy currencies</p>
                </span>
                
                <p>login</p>
                <p>register</p>
            </div>
            <img class="imagePlane" src={moneyPlane} alt=" " />
            <div className="titleBox">
                <h1 className="titleMain">Get the best rates</h1>
                <h2>We are going to compare the best sites to buy currencies for you in less than 10 seconds</h2>
                <div className="fixedIT">
                    FIELD: Enter the amount here //// FIELD: Select a currency /// BUTTON: Compare
                </div>
            </div>   

        </div>
    )
}

export default MainPage;