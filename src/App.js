import React, { useState } from 'react';

function App() {
  const [calcValue, updateValue] = useState("");

  const calculation = () => {
    try {
      updateValue(eval(calcValue));
    } catch (error) {
      updateValue("Error, please clear");
    }
  }

  const backspace = () => {
    try {
      updateValue(calcValue.slice(0, -1));
    } catch (error) {
      updateValue(0);
    }
  }
  return (
    <div className="App">
      <div className="siteContainer">
        <div className="headerContainer">
          <div className="reactLogo">
            <img src= {require("./logo192.png")} className="reactIMG"></img>
          </div>
          <div className="headerText">
            Powered by REACT
          </div>
        </div>
        <div className="calculatorContainer">
            <div className="calculatorOutput">
              <div className="outputBox">
                { calcValue }
              </div>
            </div>
            <div className="calculatorKeypad">
              <div className="topOperators">
                <button className="tOpButton" value="+" onClick={(e)=> updateValue(calcValue + e.target.value)}>+</button>
                <button className="tOpButton" value="-" onClick={(e)=> updateValue(calcValue + e.target.value)}>-</button>
                <button className="tOpButton" value="/" onClick={(e)=> updateValue(calcValue + e.target.value)}>÷</button>
                <button className="clearButton" onClick={() => updateValue("")}>AC</button>
              </div>
              <div className="digitsAndOps">
                <div className="digits">
                  <button className="numberButton" value="1" onClick={(e)=> updateValue(calcValue + e.target.value)}>1</button>
                  <button className="numberButton" value="2" onClick={(e)=> updateValue(calcValue + e.target.value)}>2</button>
                  <button className="numberButton" value="3" onClick={(e)=> updateValue(calcValue + e.target.value)}>3</button>
                  <button className="numberButton" value="4" onClick={(e)=> updateValue(calcValue + e.target.value)}>4</button>
                  <button className="numberButton" value="5" onClick={(e)=> updateValue(calcValue + e.target.value)}>5</button>
                  <button className="numberButton" value="6" onClick={(e)=> updateValue(calcValue + e.target.value)}>6</button>
                  <button className="numberButton" value="7" onClick={(e)=> updateValue(calcValue + e.target.value)}>7</button>
                  <button className="numberButton" value="8" onClick={(e)=> updateValue(calcValue + e.target.value)}>8</button>
                  <button className="numberButton" value="9" onClick={(e)=> updateValue(calcValue + e.target.value)}>9</button>
                  <button className="numberButton" id='decimalButton' value="." onClick={(e)=> updateValue(calcValue + e.target.value)}>.</button>
                  <button className="numberButtonSpecial" value="0" onClick={(e)=> updateValue(calcValue + e.target.value)}>0</button>
                  <button className="numberButton" id='backspaceButton' value="." onClick={()=> backspace()}>del</button>
                </div>
                <div className="sideOperators">
                  <button className="sOpButton" value="*" onClick={(e) => updateValue(calcValue + e.target.value)}>x</button>
                  <button className="expButton" value="**" onClick={(e) => updateValue(calcValue + e.target.value)}>n<sup>x</sup></button>
                  <button className="sOpButtonBig" value="=" onClick={() => calculation()}>=</button>
                </div>
              </div>
            </div>
        </div>
        <div className="footerContainer">
          Designed/Made by Don Brown
        </div>
      </div>
    </div>
  );
}

export default App;
