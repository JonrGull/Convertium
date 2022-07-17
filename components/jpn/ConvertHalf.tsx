import React, { useState, useEffect } from "react";
import { useClipboard, Button, Input, Flex, FormLabel } from "@chakra-ui/react";

import Encoding from "encoding-japanese";
import romajiConv from "@koozaki/romaji-conv";

export default function ConvertHalf({ input }) {
  const [halfResult, setHalfResult] = useState("");
  const { hasCopied, onCopy } = useClipboard(halfResult);

  const handleHalfKatakana = () => {
    if (input.match(/[a-zA-Z]/)) {
      const engToFull = romajiConv.toKatakana(input);
      setHalfResult(Encoding.toHankanaCase(engToFull));
    } else {
      const fullToHalf = Encoding.toKatakanaCase(input);
      setHalfResult(Encoding.toHankanaCase(fullToHalf));
    }
  };

  useEffect(() => {
    handleHalfKatakana();
  }, [input]);

  return (
    <Flex>
      <FormLabel w="200px" htmlFor="Half-width" fontSize="2xl">
        Half-width
      </FormLabel>
      <Input value={halfResult} isReadOnly fontSize="2xl" />
      <Button onClick={onCopy} ml={2}>
        {hasCopied ? "Copied" : "Copy"}
      </Button>
    </Flex>
  );
}
