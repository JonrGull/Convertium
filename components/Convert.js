import React, { useState } from "react";
import {
  Input,
  Container,
  Text,
  SimpleGrid,
  Box,
  useClipboard,
  Button,
} from "@chakra-ui/react";
import styles from "./Convert.module.css";

import ConvertHira from "./jpn/ConvertHira";
import ConvertFull from "./jpn/ConvertFull";
import ConvertHalf from "./jpn/ConvertHalf";

export default function Convert() {
  const [input, setInput] = useState("");

  //change to katakana
  //   const handleToKatakana = () => {
  //     setResult(Encoding.toKatakanaCase(input));
  //   };
  //   const handleToHiragana = () => {
  //     setResult(Encoding.toHiraganaCase (input));
  //   };

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
      <SimpleGrid columns={1} spacingX="40px" spacingY="20px">
        <ConvertHira input={input} />
        <ConvertFull input={input} />
        <ConvertHalf input={input} />
      </SimpleGrid>
    </div>
  );
}
