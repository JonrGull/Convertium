import React, { useState, useEffect } from "react";
import { useClipboard, Button, Input } from "@chakra-ui/react";
import Encoding from "encoding-japanese";

export default function ConvertHira({ input }) {
  const [hiraResult, setHiraResult] = useState("");

  useEffect(() => {
    const zenToHira = Encoding.toZenkanaCase(input);
    setHiraResult(Encoding.toHiraganaCase(zenToHira));
  }, [input]);

  const { hasCopied, onCopy } = useClipboard(hiraResult);

  return (
    <>
      Hiragana
      <Input value={hiraResult} isReadOnly fontSize="2xl" />
      <Button mr={5} onClick={onCopy} ml={2}>
        {hasCopied ? "Copied" : "Copy"}
      </Button>
    </>
  );
}
