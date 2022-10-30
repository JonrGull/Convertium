import { Button, Flex, FormLabel, Input, useClipboard } from '@chakra-ui/react';
import romajiConv from '@koozaki/romaji-conv';
import Encoding from 'encoding-japanese';
import { forwardRef, useImperativeHandle, useState } from 'react';

const ConvertHira = forwardRef((_props, ref) => {
  const [hiraResult, setHiraResult] = useState("");
  const { hasCopied, onCopy } = useClipboard(hiraResult);

  useImperativeHandle(ref, () => ({
    handleHiragana: (input: string) => {
      if (input.match(/[a-zA-Z]/)) {
        setHiraResult(romajiConv.toHiragana(input));
      } else {
        const zenToHira = Encoding.toZenkanaCase(input);
        setHiraResult(Encoding.toHiraganaCase(zenToHira));
      }
    },
  }));

  return (
    <Flex>
      <FormLabel htmlFor="Hiragana" fontSize="2xl">
        Hiragana
      </FormLabel>
      <Input value={hiraResult} isReadOnly fontSize="2xl" ml={6} />
      <Button onClick={onCopy} ml={2}>
        {hasCopied ? "Copied" : "Copy"}
      </Button>
    </Flex>
  );
});

export default ConvertHira;
