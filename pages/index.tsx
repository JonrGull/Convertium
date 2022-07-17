import React, { useState } from "react";
import { Input, Flex, Center, Box, Container, Stack } from "@chakra-ui/react";

import Footer from "../components/Footer";

import ConvertHira from "../components/jpn/ConvertHira";
import ConvertFull from "../components/jpn/ConvertFull";
import ConvertHalf from "../components/jpn/ConvertHalf";

export default function App() {
  const [input, setInput] = useState("");

  return (
    <Container maxW="650px">
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

      <Box boxShadow="lg" p="10" rounded="md" bg="white">
        <Stack direction={["column"]} spacing="24px">
          <ConvertHira input={input} />
          <ConvertFull input={input} />
          <ConvertHalf input={input} />
        </Stack>
      </Box>
      <Footer />
    </Container>
  );
}
