import React from 'react';
import { Button } from '@chakra-ui/react';

const ButtonVariant = ({
  onClick,
  display,
  bg,
  color,
  name,
  width,
  height,
}) => {
  return (
    <Button
      onClick={onClick}
      display={display}
      bg={bg}
      color={color}
      height={height}
      width={width}
      borderRadius={`10px`}
    >
      {name}
    </Button>
  );
};

export default ButtonVariant;
