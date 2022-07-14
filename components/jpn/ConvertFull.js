import React, { useState, useEffect } from "react";
import { useClipboard, Button, Input, Flex, FormLabel } from "@chakra-ui/react";

import Encoding from "encoding-japanese";
import romajiConv from "@koozaki/romaji-conv";

export default function ConvertFull({ input }) {
  const [fullResult, setFullResult] = useState("");
  const { hasCopied, onCopy } = useClipboard(fullResult);

  const handleFullKatakana = () => {
    if (input.match(/[a-zA-Z]/)) {
      setFullResult(romajiConv.toKatakana(input));
    } else {
      const zenToFull = Encoding.toZenkanaCase(input);
      setFullResult(Encoding.toKatakanaCase(zenToFull));
    }
  };

  useEffect(() => {
    handleFullKatakana();
  }, [input]);

  return (
    <Flex>
      <FormLabel htmlFor="Full-width" fontSize="2xl">
        Full-width
      </FormLabel>
      <Input value={fullResult} isReadOnly fontSize="2xl" />
      <Button onClick={onCopy} ml={2}>
        {hasCopied ? "Copied" : "Copy"}
      </Button>
    </Flex>
  );
}
