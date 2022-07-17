import React from "react";
import { Container, Stack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Container bg="#42C2FF" color="white" borderRadius="lg">
          <Text fontSize="xl"></Text>
        </Container>
      </Stack>
    </Container>
  );
}
