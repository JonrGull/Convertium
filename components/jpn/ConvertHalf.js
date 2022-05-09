import React, { useState, useEffect } from "react";
import { Box, useClipboard, Button } from "@chakra-ui/react";
import Encoding from "encoding-japanese";

export default function ConvertHalf({ input }) {
  const [halfResult, setHalfResult] = useState("");

  useEffect(() => {
    setHalfResult(Encoding.toHankanaCase(input));
  }, [input]);

  const { hasCopied, onCopy } = useClipboard(halfResult);

  return (
    <Box fontSize="2xl">
      Half: {halfResult}
      <Button onClick={onCopy} ml={2}>
        {hasCopied ? "Copied" : "Copy"}
      </Button>
    </Box>
  );
}
