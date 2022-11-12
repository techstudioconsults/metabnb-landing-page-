import {
  FormControl,
  InputGroup,
  Input,
  InputRightAddon,
} from '@chakra-ui/react';
import React from 'react';

const SearchInput = () => {
  return (
    <FormControl width={{ md: `38.7rem` }}>
      <InputGroup height={`54px`}>
        <Input
          borderRadius={`8px`}
          fontSize={`sm`}
          placeholder="Search for location"
          height={`100%`}
        />
        <InputRightAddon
          height={`100%`}
          borderRadius={`8px`}
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
