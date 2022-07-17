import React, { useState } from "react";
import { Input, Flex, Center, Box, Container } from "@chakra-ui/react";

import Footer from "../components/Footer";

import ConvertHira from "../components/jpn/ConvertHira";
import ConvertFull from "../components/jpn/ConvertFull";
import ConvertHalf from "../components/jpn/ConvertHalf";

export default function App() {
  const [input, setInput] = useState("");

  return (
    <Container>
      <Box>
        <Center mt={20}>
          <Input
            placeholder="Enter Romaji or Japanese"
            size="lg"
            mb={50}
            fontSize="1.5em"
            width="auto"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Center>
      </Box>

      <Box boxShadow="lg" p="6" rounded="md" bg="white">
        <Flex justifyContent="space-around">
          <ConvertHira input={input} />
          <ConvertFull input={input} />
          <ConvertHalf input={input} />
        </Flex>
      </Box>
      <Footer />
    </Container>
  );
}
