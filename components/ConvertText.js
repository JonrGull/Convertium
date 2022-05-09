import React, { useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";
import styles from "./ConvertText.module.css";

import Encoding from "encoding-japanese";

export default function ConvertText() {
  const [input, setInput] = useState("");
  const [fullResult, setFullResult] = useState("");
  const [halfResult, setHalfResult] = useState("");
  const [hiraResult, setHiraResult] = useState("");

  const handleConversion = () => {
    setFullResult(Encoding.toZenkanaCase(input));
    setHalfResult(Encoding.toHankanaCase(input));
    setHiraResult(Encoding.toHiraganaCase(input));
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
    <div className={styles.container}>
      <label>Convert to Japanese</label>
      <Input
        width="auto"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <div className={styles.convertContainer}>
        Full:
        <p>{fullResult}</p>
        Half:
        <p>{halfResult}</p>
        Hira:
        <p>{hiraResult}</p>
      </div>
    </div>
  );
}

// ｶﾀｶﾅ
// カタカナ
