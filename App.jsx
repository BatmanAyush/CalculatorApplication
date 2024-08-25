import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState(null);
  const [operation, setOperation] = useState(null);

  function handleClick(value) {
    setCurrentOperand((prev) => prev + value);
  }

  function handleOperation(op) {
    const current = parseFloat(currentOperand);
    setOperation(op);
    if (!isNaN(current)) {
      if (previousOperand !== null) {
        let newResult;
        if (operation === "+") {
          newResult = previousOperand + current;
        } else if (operation === "-") {
          newResult = previousOperand - current;
        } else if (operation === "*") {
          newResult = previousOperand * current;
        } else if (operation === "÷") {
          newResult = previousOperand / current;
        } else {
          newResult = current;
        }
        setPreviousOperand(newResult);
      } else {
        setPreviousOperand(current);
      }
    }
    setCurrentOperand("");
  }

  function clear() {
    setCurrentOperand("");
    setPreviousOperand(null);
    setOperation(null);
  }

  function handleResult() {
    const current = parseFloat(currentOperand);
    if (!isNaN(current) && operation !== null) {
      let newResult;
      if (operation === "+") {
        newResult = previousOperand + current;
      } else if (operation === "-") {
        newResult = previousOperand - current;
      } else if (operation === "*") {
        newResult = previousOperand * current;
      } else if (operation === "÷") {
        newResult = previousOperand / current;
      } else {
        newResult = current;
      }
      setCurrentOperand(newResult.toString());
      setPreviousOperand(null);
      setOperation(null);
    }
  }

  function handleDelete() {
    setCurrentOperand((prev) => prev.slice(0, -1));
  }

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{currentOperand || previousOperand}</div>
      </div>
      <button className="span-two" onClick={clear}>AC</button>
      <button onClick={handleDelete}>DEL</button>
      <button onClick={() => handleOperation("÷")}>÷</button>
      <button onClick={() => handleClick("1")}>1</button>
      <button onClick={() => handleClick("2")}>2</button>
      <button onClick={() => handleClick("3")}>3</button>
      <button onClick={() => handleOperation("*")}>*</button>
      <button onClick={() => handleClick("4")}>4</button>
      <button onClick={() => handleClick("5")}>5</button>
      <button onClick={() => handleClick("6")}>6</button>
      <button onClick={() => handleOperation("+")}>+</button>
      <button onClick={() => handleClick("7")}>7</button>
      <button onClick={() => handleClick("8")}>8</button>
      <button onClick={() => handleClick("9")}>9</button>
      <button onClick={() => handleOperation("-")}>-</button>
      <button onClick={() => handleClick(".")}>.</button>
      <button onClick={() => handleClick("0")}>0</button>
      <button className="span-two" onClick={handleResult}>=</button>
    </div>
  );
}
