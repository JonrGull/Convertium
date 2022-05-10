import React, { useState } from "react";
import { Input, Flex, Center } from "@chakra-ui/react";

import ConvertHira from "./jpn/ConvertHira";
import ConvertFull from "./jpn/ConvertFull";
import ConvertHalf from "./jpn/ConvertHalf";
import SendData from "../components/SendData";

export default function Convert() {
  const [input, setInput] = useState("");

  return (
    <div>
      <Center mt={20}>Enter English or Japanese</Center>
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
      <Flex>
        <ConvertHira input={input} />
        <ConvertFull input={input} />
        <ConvertHalf input={input} />
      </Flex>
      <SendData input={input} />
    </div>
  );
}
