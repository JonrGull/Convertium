import React, { useState } from "react";

import Encoding from "encoding-japanese";

export default function ConvertText() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  //this only works for converting from half width to full width Japanese
  function convertToFull() {
    setResult(input.normalize("NFKC"));
  }

  const handleToFull = () => {
    setResult(Encoding.toZenkanaCase(input));
  };
  const handleToHalf = () => {
    setResult(Encoding.toHankanaCase(input));
  };

  //change to katakana
  //   const handleToKatakana = () => {
  //     setResult(Encoding.toKatakanaCase(input));
  //   };
  //   const handleToHiragana = () => {
  //     setResult(Encoding.toHiraganaCase (input));
  //   };

  return (
    <div>
      <label>Please enter something idk</label>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleToFull}>To Full Width</button>
      <button onClick={handleToHalf}>To Half Width</button>

      <p>{result}</p>
    </div>
  );
}

// ｶﾀｶﾅ
// カタカナ
