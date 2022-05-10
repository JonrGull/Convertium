import { Container, Button, Stack, Text } from "@chakra-ui/react";

import React from "react";

export default function SendData() {
  return (
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Text>
          Is this app useful? Please click this button to send your entry so it
          may be used for data science purposes.
        </Text>
        <Button colorScheme="teal" variant="outline">
          Submit
        </Button>
      </Stack>
    </Container>
  );
}
