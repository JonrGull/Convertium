import React, { useState } from "react";
import {
  Input,
  FormControl,
  Flex,
  Center,
  Button,
  Container,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import ConvertHira from "../components/jpn/ConvertHira";
import ConvertFull from "../components/jpn/ConvertFull";
import ConvertHalf from "../components/jpn/ConvertHalf";

export default function App() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    try {
      setIsLoading(true);
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
        setInput("");
        resetField("entry");
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.entry}>
        <Center mt={20}>
          <Input
            {...register("entry", {
              required: "This is required",
            })}
            placeholder="Enter Romaji or Japanese"
            size="lg"
            mb={50}
            fontSize="1.5em"
            width="auto"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Center>
      </FormControl>

      <Flex justifyContent="space-around">
        <ConvertHira input={input} />
        <ConvertFull input={input} />
        <ConvertHalf input={input} />
      </Flex>
      <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
        <Stack spacing={{ base: "4", md: "5" }}>
          <Container bg="#42C2FF" color="white" borderRadius="lg">
            <Text fontSize="xl">
              Like this app? Please click submit to send your entry so it may be
              used for data science purposes.
            </Text>
          </Container>

          <Button
            colorScheme="teal"
            variant="outline"
            isLoading={isLoading}
            type="submit"
          >
            Submit
          </Button>
        </Stack>
      </Container>
    </form>
  );
}
