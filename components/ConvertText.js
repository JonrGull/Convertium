import React, { useState } from "react";
import * as StrUtil from "str-util";
import { ZH2JP } from "str-util";

export default function ConvertText() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  console.log("~ input", input);
  console.log("~ result", result);

  const handleToFullWidth = () => {
    setResult(StrUtil.toFullWidth(input));
  };

  const handleToHalfWidth = () => {
    setResult(StrUtil.toHalfWidth(input));
  };

  return (
    <div>
      <label>Enter here or whatever</label>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleToFullWidth}>To Full Width</button>
      <button onClick={handleToHalfWidth}>To Half Width</button>
      <p>{result}</p>
    </div>
  );
}
