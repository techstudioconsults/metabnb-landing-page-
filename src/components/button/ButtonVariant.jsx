import React from 'react';
import { Button } from '@chakra-ui/react';

const ButtonVariant = ({
  onClick,
  isMobile,
  bg,
  color,
  name,
  width,
  height,
}) => {
  return (
    <Button
      onClick={onClick}
      display={{
        base: isMobile ? `block` : `none`,
        xl: `block`,
      }}
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
