function App() {
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
                0
              </div>
            </div>
            <div className="calculatorKeypad">
              <div className="topOperators">
                <button className="tOpButton">+</button>
                <button className="tOpButton">-</button>
                <button className="tOpButton">÷</button>
                <button className="clearButton">AC</button>
              </div>
              <div className="digitsAndOps">
                <div className="digits">
                  <button className="numberButton">1</button>
                  <button className="numberButton">2</button>
                  <button className="numberButton">3</button>
                  <button className="numberButton">4</button>
                  <button className="numberButton">5</button>
                  <button className="numberButton">6</button>
                  <button className="numberButton">7</button>
                  <button className="numberButton">8</button>
                  <button className="numberButton">9</button>
                  <button className="numberButtonSpecial">0</button>
                </div>
                <div className="sideOperators">
                  <button className="sOpButton">x</button>
                  <button className="expButton">n<sup>x</sup></button>
                  <button className="sOpButtonBig">=</button>
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
