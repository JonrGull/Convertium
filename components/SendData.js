import React, { useState } from "react";

import { Container, Button, Stack, Text } from "@chakra-ui/react";

export default function SendData({ input, setInput }) {
  const [sentData, setSentData] = useState(false);

  const handleData = () => {
    if (input === null || input.trim() === "") {
      alert("Please enter something");
      return;
    }

    try {
      setSentData(true);
      fetch("api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: input,
        }),
      });
      setTimeout(() => {
        setSentData(false);
        setInput("");
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Container bg="#42C2FF" color="white" borderRadius="lg">
          <Text fontSize="xl">
            Is this app useful? Please click submit to send your entry so it may
            be used for data science purposes.
          </Text>
        </Container>
        {sentData ? (
          <Button
            variantColor="green"
            variant="outline"
            isLoading
            loadingText="Submitting"
          />
        ) : (
          <Button colorScheme="teal" variant="outline" onClick={handleData}>
            Submit
          </Button>
        )}
      </Stack>
    </Container>
  );
}
