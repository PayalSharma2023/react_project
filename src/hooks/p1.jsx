import React, { useState } from "react";


function Calculator(){
    
const [ini, setop] = useState("");
const [res, setres] = useState(null);

function add(e){
   setop(ini+e.target.value);
}

function Calculate(){
    try{
        setop("");
        setres(eval(ini));

    }catch{
        setres("error")
    }
}
function clear(){
    setop("");
    setres(null); // Reset both input and result
}
    return(
        <>
        
        <h1>Calculations</h1>
        <div>
            <input type="text" value={ini} readOnly />
            <p>Result: {res !== null ? res : ""}</p>
        </div>
        {/* numbers */}
        <button value="1" onClick={add}>1</button>
        <button value="2"onClick={add}>2</button>
        <button value="3"onClick={add}>3</button>
        <button value="4"onClick={add}>4</button>
        <button value="5"onClick={add}>5</button>
        <button value="6"onClick={add}>6</button>
        <button value="7"onClick={add}>7</button>
        <button value="8"onClick={add}>8</button>
        <button value="9"onClick={add}>9</button>
        <button value="0"onClick={add}>0</button><br />

        {/* operations */}
      <button value="+" onClick={add}>+</button>
      <button value="-" onClick={add}>-</button>
      <button value="*" onClick={add}>*</button>
      <button value="/" onClick={add}>/</button>

        {/* equal */}
        <button onClick={Calculate}>=</button>
        <button onClick={clear}>AC</button>
        </>
    );
}

export default Calculator;