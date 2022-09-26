import { Button, Flex, FormLabel, Input, useClipboard } from "@chakra-ui/react";
import romajiConv from "@koozaki/romaji-conv";
import Encoding from "encoding-japanese";
import React, { forwardRef, useImperativeHandle, useState } from "react";

const ConvertHalf = forwardRef((_props, ref) => {
  const [halfResult, setHalfResult] = useState<string>("");
  const { hasCopied, onCopy } = useClipboard(halfResult);

  useImperativeHandle(ref, () => ({
    handleHalfKatakana: (input: string) => {
      if (input.match(/[a-zA-Z]/)) {
        const engToFull = romajiConv.toKatakana(input);
        setHalfResult(Encoding.toHankanaCase(engToFull));
      } else {
        const fullToHalf = Encoding.toKatakanaCase(input);
        setHalfResult(Encoding.toHankanaCase(fullToHalf));
      }
    },
  }));

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
});

export default ConvertHalf;
