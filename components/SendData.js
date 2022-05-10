import React, { useState } from "react";

import { Container, Button, Stack, Text } from "@chakra-ui/react";

export default function SendData({ input }) {
  const [sentData, setSentData] = useState(false);

  const handleData = () => {
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
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(sentData);
  return (
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Text>
          Is this app useful? Please click this button to send your entry so it
          may be used for data science purposes.
        </Text>

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
