import { Box, Center, Container, Input, Stack } from "@chakra-ui/react";
import { useRef } from "react";

import ConvertFull from "../components/jpn/ConvertFull";
import ConvertHalf from "../components/jpn/ConvertHalf";
import ConvertHira from "../components/jpn/ConvertHira";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const hiraRef = useRef(null);
  const fullRef = useRef(null);
  const halfRef = useRef(null);

  const onChange = (e: { target: { value: any } }) => {
    hiraRef.current.handleHiragana(e.target.value);
    fullRef.current.handleFullKatakana(e.target.value);
    halfRef.current.handleHalfKatakana(e.target.value);
  };

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
            ref={inputRef}
            onChange={onChange}
          />
        </Center>
      </Box>

      <Box boxShadow="md" p="10" rounded="md" bg="white">
        <Stack direction={["column"]} spacing="24px">
          <ConvertHira ref={hiraRef} />
          <ConvertFull ref={fullRef} />
          <ConvertHalf ref={halfRef} />
        </Stack>
      </Box>
    </Container>
  );
}
