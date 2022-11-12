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
      <Card
        image={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186170/hng/Metabnb/images-and-icons/Frame_151-4_ssqk2h.png`}
      />
      <Card
        image={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186170/hng/Metabnb/images-and-icons/Frame_151-5_hcl1me.png`}
      />
      <Card
        image={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186170/hng/Metabnb/images-and-icons/Frame_151-6_cuogsp.png`}
      />
      <Card
        image={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186171/hng/Metabnb/images-and-icons/Frame_151-7_pzwmxl.png`}
      />
      <Card
        image={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186164/hng/Metabnb/images-and-icons/Frame_151_xe7a1b.png`}
      />
      <Card
        image={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186164/hng/Metabnb/images-and-icons/Frame_151-1_zmw09w.png`}
      />
      <Card
        image={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186164/hng/Metabnb/images-and-icons/Frame_151-2_bwzvx3.png`}
      />
      <Card
        image={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186164/hng/Metabnb/images-and-icons/Frame_151-3_je19hp.png`}
      />
    </SimpleGrid>
  );
};

export default GridDisplay;
