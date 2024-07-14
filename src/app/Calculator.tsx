"use client";

import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

function Calculator() {
  const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
  };

  const [state, setState] = useState(initialState);

  const addDigit = (digit: string) => {
    if (digit === "." && state.displayValue.includes(".")) {
      return;
    }
    const clearDisplay = state.displayValue === "0" || state.clearDisplay;
    const currentValue = clearDisplay ? "" : state.displayValue;
    const displayValue = currentValue + digit;
    setState({ ...state, displayValue, clearDisplay: false });

    if (digit !== ".") {
      const i = state.current;
      const newValue = parseFloat(displayValue);
      const values = [...state.values];
      values[i] = newValue;
      setState({ ...state, values });
    }

  };

  const setOperation = (op: string) => {
    console.log(op);
  };

  const clearMemory = () => {
    setState(initialState);
  };

  return (
    <div className="h-80 w-60 rounded-md overflow-hidden bg-red-500 grid grid-cols-4 grid-rows-5x48">
      <Display value={state.displayValue} />
      <Button label="AC" onButtonClick={clearMemory} className="col-span-3" />
      <Button
        label="/"
        onButtonClick={setOperation}
        className=" bg-orange-500 text-black"
      />
      <Button label="7" onButtonClick={addDigit} />
      <Button label="8" onButtonClick={addDigit} />
      <Button label="9" onButtonClick={addDigit} />
      <Button
        label="*"
        onButtonClick={setOperation}
        className=" bg-orange-500 text-black"
      />
      <Button label="4" onButtonClick={addDigit} />
      <Button label="5" onButtonClick={addDigit} />
      <Button label="6" onButtonClick={addDigit} />
      <Button
        label="-"
        onButtonClick={setOperation}
        className=" bg-orange-500 text-black"
      />
      <Button label="1" onButtonClick={addDigit} />
      <Button label="2" onButtonClick={addDigit} />
      <Button label="3" onButtonClick={addDigit} />
      <Button
        label="+"
        onButtonClick={setOperation}
        className=" bg-orange-500 text-black"
      />
      <Button label="0" onButtonClick={addDigit} className="col-span-2" />
      <Button label="." onButtonClick={addDigit} />
      <Button label="=" onButtonClick={setOperation} />
    </div>
  );
}

export default Calculator;