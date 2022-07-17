import React, { useState } from "react";
import {
  Input,
  FormControl,
  Flex,
  Center,
  Button,
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import Footer from "../components/Footer";

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
        <Box>
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
        </Box>
      </FormControl>
      <Box boxShadow="lg" p="6" rounded="md" bg="white">
        <Flex justifyContent="space-around">
          <ConvertHira input={input} />
          <ConvertFull input={input} />
          <ConvertHalf input={input} />
        </Flex>
      </Box>

      <Footer />
      <Button
        colorScheme="teal"
        variant="outline"
        isLoading={isLoading}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

