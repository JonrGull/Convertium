import React, { useState, useEffect } from "react";
import { useClipboard, Button, Input } from "@chakra-ui/react";
import Encoding from "encoding-japanese";
import romajiConv from "@koozaki/romaji-conv";

export default function ConvertHira({ input }) {
  const [hiraResult, setHiraResult] = useState("");
  const { hasCopied, onCopy } = useClipboard(hiraResult);

  const handleHiragana = () => {
    if (input.match(/[a-zA-Z]/)) {
      setHiraResult(romajiConv.toHiragana(input));
    } else {
      const zenToHira = Encoding.toZenkanaCase(input);
      setHiraResult(Encoding.toHiraganaCase(zenToHira));
    }
  };

  useEffect(() => {
    handleHiragana();
  }, [input]);

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
