function App() {
  return (
    <div className="App">
      <div className="siteContainer">
        <div className="headerContainer">
          reactHeaderContainer
        </div>
        <div className="calculatorContainer">
            <div className="calculatorOutput">
              <div className="outputBox">
                0
              </div>
            </div>
            <div className="calculatorKeypad">
              <div className="topOperators">
                <button>+</button>
                <button>-</button>
                <button>÷</button>
                <button>AC</button>
              </div>
              <div className="digitsAndOps">
                <div className="digits">
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>4</button>
                  <button>5</button>
                  <button>6</button>
                  <button>7</button>
                  <button>8</button>
                  <button>9</button>
                  <button>0</button>
                </div>
                <div className="sideOperators">
                  <button>*</button>
                  <button>exp</button>
                  <button>=</button>
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
