"use client";

import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

function Calculator() {
  const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: "",
    values: [0, 0],
    current: 0,
  };

  const [state, setState] = useState(initialState);

  const addDigit = (digit: string) => {
    setState((prevState) => {
      if (digit === "." && prevState.displayValue.includes(".")) {
        return prevState; 
      }
  
      const clearDisplay = prevState.displayValue === "0" || prevState.clearDisplay;
      const currentValue = clearDisplay ? "" : prevState.displayValue;
      const displayValue = currentValue + digit;
  
      if (digit !== ".") {
        const i = prevState.current;
        const newValue = parseFloat(displayValue);
        const values = [...prevState.values];
        values[i] = newValue;
        return { ...prevState, displayValue, clearDisplay: false, values }; 
      } else {
        return { ...prevState, displayValue, clearDisplay: false }; 
      }
    });
  };
  const setOperation = (op: string) => {
    if (state.current === 0) {
      setState({ ...state, operation: op, current: 1, clearDisplay: true });
    } else {
      const equals = op === "=";
      const currentOperation = state.operation;
      const values = [...state.values];

      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } catch (e) {

        values[0] = state.values[0];
      }

      values[1] = 0;
        setState({
            displayValue: values[0].toString(),
            operation: equals ? "" : op,
            current: equals ? 0 : 1,
            clearDisplay: !equals,
            values,
        });

    }
  };

  const clearMemory = () => {
    setState(initialState);
  };

  return (
    <div className="h-80 w-60 rounded-md overflow-hidden grid grid-cols-4 grid-rows-5x48">
      <Display value={state.displayValue} />
      <Button label="AC" onButtonClick={clearMemory} classNameStyle="col-span-3" />
      <Button
        label="/"
        onButtonClick={setOperation}
       
      />
      <Button label="7" onButtonClick={addDigit} />
      <Button label="8" onButtonClick={addDigit} />
      <Button label="9" onButtonClick={addDigit} />
      <Button
        label="*"
        onButtonClick={setOperation}
      />
      <Button label="4" onButtonClick={addDigit} />
      <Button label="5" onButtonClick={addDigit} />
      <Button label="6" onButtonClick={addDigit} />
      <Button
        label="-"
        onButtonClick={setOperation}
      />
      <Button label="1" onButtonClick={addDigit} />
      <Button label="2" onButtonClick={addDigit} />
      <Button label="3" onButtonClick={addDigit} />
      <Button
        label="+"
        onButtonClick={setOperation}
      />
      <Button label="0" onButtonClick={addDigit} classNameStyle="col-span-2" />
      <Button label="." onButtonClick={addDigit} />
      <Button label="=" onButtonClick={setOperation} />
    </div>
  );
}

export default Calculator;