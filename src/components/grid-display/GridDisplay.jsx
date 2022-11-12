import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Card from '../card/Card';

const GridDisplay = () => {
  return (
    <SimpleGrid
      className="page_alignment"
      px={{ md: 30, lg: 20, xl: `initial` }}
      justifyItems={`center`}
      gap={6}
      columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
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
