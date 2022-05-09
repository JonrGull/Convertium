import React, { useState, useEffect } from "react";

import Encoding from "encoding-japanese";

export default function ConvertText() {
  const [input, setInput] = useState("");
  const [fullResult, setFullResult] = useState("");
  const [halfResult, setHalfResult] = useState("");

  const handleConversion = () => {
    setFullResult(Encoding.toZenkanaCase(input));
    setHalfResult(Encoding.toHankanaCase(input));
  };

  //change to katakana
  //   const handleToKatakana = () => {
  //     setResult(Encoding.toKatakanaCase(input));
  //   };
  //   const handleToHiragana = () => {
  //     setResult(Encoding.toHiraganaCase (input));
  //   };

  useEffect(() => {
    handleConversion();
  }, [input]);

  return (
    <div >
      <label>Please enter something idk</label>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <p>Full: {fullResult}</p>
      <p>Half: {halfResult}</p>
    </div>
  );
}

// ｶﾀｶﾅ
// カタカナ
