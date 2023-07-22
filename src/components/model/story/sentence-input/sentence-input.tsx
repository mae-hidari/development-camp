import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';

function SentenceInput() {
  const [body, setBody] = useState('');

  const handleSendBody = () => {
    if (!body.trim().length) {
      return;
    }
    setBody('');
  };

  return (
    <Flex justifyContent="flex-end" w="100%">
      <InputGroup mr="4" size="md" width="86%">
        <Input
          border="1px solid gray"
          borderRadius="8"
          color="whiteAlpha.700"
          placeholder="Type Something..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendBody();
            }
          }}
        />
        <InputRightElement width="16">
          <IconButton
            aria-label="send body"
            color="white"
            disabled={body.trim().length <= 0}
            icon={<BsSend />}
            onClick={handleSendBody}
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}

export default SentenceInput;
