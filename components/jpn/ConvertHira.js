import React, { useState, useEffect } from "react";
import { Box, useClipboard, Button } from "@chakra-ui/react";
import Encoding from "encoding-japanese";

export default function ConvertHira({ input }) {
  const [hiraResult, setHiraResult] = useState("");

  useEffect(() => {
    setHiraResult(Encoding.toHiraganaCase(input));
  }, [input]);

  const { hasCopied, onCopy } = useClipboard(hiraResult);

  return (
    <Box fontSize="2xl">
      Hira: {hiraResult}
      <Button onClick={onCopy} ml={2}>
        {hasCopied ? "Copied" : "Copy"}
      </Button>
    </Box>
  );
}
