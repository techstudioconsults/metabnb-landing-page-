import { Link, OrderedList, ListItem } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

const Links = ({ isMobile }) => {
  return (
    <OrderedList
      display={{ base: isMobile ? `flex` : `none`, xl: `flex` }}
      flexDir={isMobile ? `column` : `row`}
      color={isMobile ? `white` : `black`}
      alignItems={`center`}
      justifyContent={`space-evenly`}
      gap={10}
      h={`100%`}
    >
      <Link as={RouterLink} to={`/`}>
        <ListItem fontSize={`xl`}>Home</ListItem>
      </Link>
      <Link as={RouterLink}>
        <ListItem fontSize={`xl`} to={`/`}>
          Place to stay
        </ListItem>
      </Link>
      <Link as={RouterLink}>
        <ListItem fontSize={`xl`} to={`/`}>
          NFTs
        </ListItem>
      </Link>
      <Link as={RouterLink}>
        <ListItem fontSize={`xl`} to={`/`}>
          Community
        </ListItem>
      </Link>
    </OrderedList>
  );
};

export default Links;
