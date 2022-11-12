import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Card from '../card/Card';

const GridDisplay = () => {
  return (
    <SimpleGrid gap={6} columns={{ base: 1, md: 2, lg: 4 }}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </SimpleGrid>
  );
};

export default GridDisplay;
