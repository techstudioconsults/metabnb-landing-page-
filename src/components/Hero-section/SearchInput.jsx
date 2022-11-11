import {
  FormControl,
  InputGroup,
  Input,
  InputRightAddon,
} from '@chakra-ui/react';
import React from 'react';

const SearchInput = () => {
  return (
    <FormControl>
      <InputGroup size="lg">
        <Input fontSize={`sm`} placeholder="Search for location" />
        <InputRightAddon
          fontSize={`md`}
          px={`5.2rem`}
          as={`button`}
          size={`lg`}
          children="Search"
          backgroundColor={`accent`}
          color={`white`}
        />
      </InputGroup>
    </FormControl>
  );
};

export default SearchInput;
