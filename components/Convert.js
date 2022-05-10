import React, { useState } from "react";
import { Input, Flex } from "@chakra-ui/react";
import styles from "./Convert.module.css";

import ConvertHira from "./jpn/ConvertHira";
import ConvertFull from "./jpn/ConvertFull";
import ConvertHalf from "./jpn/ConvertHalf";
import SendData from "../components/SendData";

export default function Convert() {
  const [input, setInput] = useState("");

  return (
    <div className={styles.container}>
      <Flex>Enter English or Japanese</Flex>
      <Input
        size="lg"
        mb={50}
        fontSize="1.5em"
        p={3}
        width="auto"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Flex>
        <ConvertHira input={input} />
        <ConvertFull input={input} />
        <ConvertHalf input={input} />
      </Flex>
      <SendData />
    </div>
  );
}
