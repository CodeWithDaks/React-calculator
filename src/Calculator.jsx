import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e, num) => {
    const inputValue = e.target.value;

    // Basic input validation for numbers
    if (/^-?\d*\.?\d*$/.test(inputValue) || inputValue === "") {
      num === 1 ? setNum1(inputValue) : setNum2(inputValue);
      setError("");
    } else {
      setError("Please enter a valid number.");
    }
  };

  const handleOperationClick = (op) => {
    setOperation(op);
    setError("");
  
    if (num1 === "" && num2 === "") {
      setError("Please enter values for Num 1 and Num 2.");
      return;
    }
  
    if (num1 === "") {
      setError("Num 1 Cannot Be empty");
      return;
    }
  
    if (num2 === "") {
      setError("Num 2 Cannot Be empty");
      return;
    }
  
    calculateResult();
  };
  

  const calculateResult = () => {
    

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

        

    switch (operation) {
      case "+":
        setResult(number1 + number2);
        break;
      case "-":
        setResult(number1 - number2);
        break;
      case "*":
        setResult(number1 * number2);
        break;
      case "/":
        if (number2 === 0) {
          setError("Cannot divide by zero.");
        } else {
          setResult(number1 / number2);
        }
        break;
      default:
        setError("Invalid operation.");
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <h2>React Calculator</h2>
        <div className="numinput">
          <input
            type="text"
            placeholder="Num 1"
            value={num1}
            onChange={(e) => handleInputChange(e, 1)}
          />
        </div>
        <div className="numinput">
          <input
            type="text"
            placeholder="Num 1"
            value={num2}
            onChange={(e) => handleInputChange(e, 2)}
          />
        </div>
        <div className="opbtn">
          <button onClick={() => handleOperationClick("+")}>+</button>
          <button onClick={() => handleOperationClick("-")}>-</button>
          <button onClick={() => handleOperationClick("*")}>×</button>
          <button onClick={() => handleOperationClick("/")}>/</button>
        </div>
        <div>
          {error && (
            <div className="con">
              <p className="error">Error!</p>
              {error}
            </div>
          )}
          {result !== null && (
            <div className="con">
              <p className="success">Success!</p>
              Result : {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;