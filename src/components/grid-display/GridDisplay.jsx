import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Card from '../card/Card';

const GridDisplay = () => {
  return (
    <SimpleGrid
      className="page_alignment"
      justifyItems={`center`}
      gap={6}
      columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
    >
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
