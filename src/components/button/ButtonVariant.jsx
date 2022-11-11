import React from 'react';
import { Button } from '@chakra-ui/react';

const ButtonVariant = ({ name, width, height }) => {
  return (
    <Button
      bg={`accent`}
      color={`white`}
      height={height}
      width={width}
    >
      {name}
    </Button>
  );
};

export default ButtonVariant;
