import React from "react";

function FormCompare(){
    return (
        <div>
            <form>
            <label>
                    Pick the currency you have:  
                    <select>
                    <option value="AUS">Australian Dollar</option>
                        <option value="BR">Brazilian</option>
                        <option value="ARG">Argentine Peso</option>
                        <option value="US">US Dolar</option>
                        <option value="EUR">Euro</option>
                    </select>
                </label>
                <br />
                <label>
                    Pick the currency you need:  
                    <select>
                        <option value="AUS">Australian Dollar</option>
                        <option value="BR">Brazilian</option>
                        <option value="ARG">Argentine Peso</option>
                        <option value="US">US Dolar</option>
                        <option value="EUR">Euro</option>
                    </select>
                </label><br />
                <label>
                    Amount to transfer:  
                <input type='number'/><br />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    
    )
}


export default FormCompare;