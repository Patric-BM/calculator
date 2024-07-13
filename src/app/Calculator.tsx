"use client";

import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

function Calculator() {
  const addDigit = (digit: string) => {
    console.log(digit);
  };

  const setOperation = (op: string) => {
    console.log(op);
  };

  const clearMemory = () => {
    console.log("clear");
  };

  return (
    <div className="h-80 w-60 rounded-md overflow-hidden bg-red-500 grid grid-cols-4 grid-rows-5x48">
      <Display value="0" />
      <Button label="AC" onButtonClick={clearMemory} className="col-span-3 bg-orange-500" />
      <Button label="/" onButtonClick={setOperation} />
        <Button label="7" onButtonClick={addDigit} />
        <Button label="8" onButtonClick={addDigit} />
        <Button label="9" onButtonClick={addDigit} />
        <Button label="*" onButtonClick={setOperation} />
        <Button label="4" onButtonClick={addDigit} />
        <Button label="5" onButtonClick={addDigit} />
        <Button label="6" onButtonClick={addDigit} />
        <Button label="-" onButtonClick={setOperation} />
        <Button label="1" onButtonClick={addDigit} />
        <Button label="2" onButtonClick={addDigit} />
        <Button label="3" onButtonClick={addDigit} />
        <Button label="+" onButtonClick={setOperation} />
        <Button label="0" onButtonClick={addDigit} />
        <Button label="." onButtonClick={addDigit} />
        <Button label="=" onButtonClick={setOperation} />

    </div>
  );
}

export default Calculator;