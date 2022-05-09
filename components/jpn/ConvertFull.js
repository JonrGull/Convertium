import React, { useState, useEffect } from "react";
import { Box, useClipboard, Button } from "@chakra-ui/react";
import Encoding from "encoding-japanese";

export default function ConvertFull({ input }) {
  const [fullResult, setFullResult] = useState("");

  useEffect(() => {
    setFullResult(Encoding.toZenkanaCase(input));
  }, [input]);

  const { hasCopied, onCopy } = useClipboard(fullResult);

  return (
    <Box fontSize="2xl">
      Full: {fullResult}
      <Button onClick={onCopy} ml={2}>
        {hasCopied ? "Copied" : "Copy"}
      </Button>
    </Box>
  );
}
