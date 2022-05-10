import React, { useState } from "react";
import { Input, Flex, Center, Text } from "@chakra-ui/react";

import ConvertHira from "./jpn/ConvertHira";
import ConvertFull from "./jpn/ConvertFull";
import ConvertHalf from "./jpn/ConvertHalf";
import SendData from "../components/SendData";

export default function Convert() {
  const [input, setInput] = useState("");

  return (
    <>
      <Center mt={20}>Enter Romaji or Japanese</Center>
      <Center>
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
      </Center>
      <Flex justifyContent="space-around">
        <Text fontSize="2xl">Hiragana</Text>
        <Text ml={9} fontSize="2xl">
          Full-width Katakana
        </Text>
        <Text fontSize="2xl">Half-width Katakana</Text>
      </Flex>
      <Flex>
        <ConvertHira input={input} />
        <ConvertFull input={input} />
        <ConvertHalf input={input} />
      </Flex>
      <SendData input={input} setInput={setInput} />
    </>
  );
}
