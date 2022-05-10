import React, { useState, useEffect } from "react";
import { useClipboard, Button, Input } from "@chakra-ui/react";
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
    <>
      <Input value={halfResult} isReadOnly fontSize="2xl" />
      <Button mr={5} onClick={onCopy} ml={2}>
        {hasCopied ? "Copied" : "Copy"}
      </Button>
    </>
  );
}
