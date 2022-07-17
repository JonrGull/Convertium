import React from "react";
import { Container, Stack, Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Container bg="#42C2FF" color="white" borderRadius="lg">
          <Text fontSize="xl">
            Like this app? Please click submit to send your entry so it may be
            used for data science purposes.
          </Text>
        </Container>
      </Stack>
    </Container>
  );
}
