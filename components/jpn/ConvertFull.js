import React, { useState, useEffect } from "react";
import { useClipboard, Button, Input } from "@chakra-ui/react";
import Encoding from "encoding-japanese";

export default function ConvertFull({ input }) {
  const [fullResult, setFullResult] = useState("");

  useEffect(() => {
    setFullResult(Encoding.toZenkanaCase(input));
  }, [input]);

  const { hasCopied, onCopy } = useClipboard(fullResult);

  return (
    <>
    Full-width Katakana 
      <Input value={fullResult} isReadOnly fontSize="2xl" />
      <Button mr={5} onClick={onCopy} ml={2}>
        {hasCopied ? "Copied" : "Copy"}
      </Button>
    </>
  );
}
