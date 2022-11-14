import { QuestionIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  IconButton,
  Popover,
  PopoverContent,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

import { PopoverTrigger as OrigPopoverTrigger } from "@chakra-ui/react";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

export default function EngTranslateBtn({
  input,
  setInput,
  changeToKana,
}: {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  changeToKana: (e: { target: { value: string } }) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { onOpen, onClose, isOpen } = useDisclosure();

  const handleTranslate = async () => {
    if (!input.trim()) return;

    try {
      setIsLoading(true);
      const result = await axios.post("/api/translate", {
        text: input,
      });

      setInput(result.data);
      changeToKana({ target: { value: result.data } });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Center>
        <Button
          colorScheme="blue"
          size="lg"
          mt={10}
          mb={10}
          ml={10}
          onClick={() => handleTranslate()}
          isLoading={isLoading}
        >
          Translate to Japanese
        </Button>

        <Popover
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          placement="right"
        >
          <PopoverTrigger>
            <IconButton
              size="sm"
              icon={<QuestionIcon />}
              aria-label={""}
              ml={5}
            />
          </PopoverTrigger>
          <PopoverContent p={5}>
            <Text>
              If you want to type in English, click the button to translate to
              Japanese. Try to stick to foreign words or names.
            </Text>
          </PopoverContent>
        </Popover>
      </Center>
    </Box>
  );
}
