import React, { useState, useEffect } from "react";
import { useClipboard, Button, Input } from "@chakra-ui/react";
import Encoding from "encoding-japanese";

export default function ConvertHalf({ input }) {
  const [halfResult, setHalfResult] = useState("");

  useEffect(() => {
    setHalfResult(Encoding.toHankanaCase(input));
  }, [input]);

  const { hasCopied, onCopy } = useClipboard(halfResult);

  return (
    <>
      Half-Width Katakana
      <Input value={halfResult} isReadOnly fontSize="2xl" />
      <Button mr={5} onClick={onCopy} ml={2}>
        {hasCopied ? "Copied" : "Copy"}
      </Button>
    </>
  );
}
