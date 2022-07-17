import React, { useState } from "react";
import { Input, Center, Box, Container, Stack } from "@chakra-ui/react";

import ConvertHira from "../components/jpn/ConvertHira";
import ConvertFull from "../components/jpn/ConvertFull";
import ConvertHalf from "../components/jpn/ConvertHalf";

export default function App() {
  const [input, setInput] = useState<string>("");

  return (
    <Container maxW="650px">
      <Box boxShadow="md" pt={10} rounded="md" mt={10} mb={10}>
        <Center mt={5}>
          <Input
            placeholder="Enter Romaji or Japanese"
            size="lg"
            mb={50}
            fontSize="2xl"
            width="auto"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Center>
      </Box>

      <Box boxShadow="md" p="10" rounded="md" bg="white">
        <Stack direction={["column"]} spacing="24px">
          <ConvertHira input={input} />
          <ConvertFull input={input} />
          <ConvertHalf input={input} />
        </Stack>
      </Box>
    </Container>
  );
}
