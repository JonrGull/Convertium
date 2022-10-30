import { Button, Flex, FormLabel, Input, useClipboard } from "@chakra-ui/react";
import romajiConv from "@koozaki/romaji-conv";
import Encoding from "encoding-japanese";
import React, { forwardRef, useImperativeHandle, useState } from "react";

const ConvertFull = forwardRef((_props, ref) => {
  const [fullResult, setFullResult] = useState("");
  const { hasCopied, onCopy } = useClipboard(fullResult);

  useImperativeHandle(ref, () => ({
    handleFullKatakana: (input: string) => {
      if (input.match(/[a-zA-Z]/)) {
        setFullResult(romajiConv.toKatakana(input));
      } else {
        const zenToFull = Encoding.toZenkanaCase(input);
        setFullResult(Encoding.toKatakanaCase(zenToFull));
      }
    },
  }));

  return (
    <Flex>
      <FormLabel w="200px" htmlFor="Full-width" fontSize="2xl">
        Full-width
      </FormLabel>
      <Input value={fullResult} isReadOnly fontSize="2xl" />
      <Button onClick={onCopy} ml={2}>
        {hasCopied ? "Copied" : "Copy"}
      </Button>
    </Flex>
  );
});

export default ConvertFull;
