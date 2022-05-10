import React from "react";

import { Container, Button, Stack, Text } from "@chakra-ui/react";

export default function SendData({ input }) {
  const handleData = () => {
    try {
      fetch("http://localhost:3000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: input,
        }),
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {}
  };

  return (
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Text>
          Is this app useful? Please click this button to send your entry so it
          may be used for data science purposes.
        </Text>
        <Button colorScheme="teal" variant="outline" onClick={handleData}>
          Submit
        </Button>
      </Stack>
    </Container>
  );
}
