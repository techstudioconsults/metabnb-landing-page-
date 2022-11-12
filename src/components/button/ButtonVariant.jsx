import React from 'react';
import { Button } from '@chakra-ui/react';

const ButtonVariant = ({ isMobile, bg, color, name, width, height }) => {
  return (
    <Button
      display={{
        base: isMobile ? `block` : `none`,
        xl: isMobile ? `none` : `block`,
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
