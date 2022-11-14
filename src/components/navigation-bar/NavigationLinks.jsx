import { OrderedList, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './navbar.module.scss';

const Links = ({ isMobile }) => {
  return (
    <OrderedList
      display={{ base: isMobile ? `flex` : `none`, xl: `flex` }}
      flexDir={isMobile ? `column` : `row`}
      color={isMobile ? `white` : `black`}
      alignItems={{ xl: `center` }}
      m={0}
      gap={{ base: 16, xl: 10 }}
      // h={`80%`}
      ml={{ xl: 20 }}
      // mt={1}
    >
      <ListItem fontSize={`xl`}>
        <NavLink
          to={`/`}
          className={({ isActive }) =>
            isActive ? style.active : style.inactive
          }
        >
          Home
        </NavLink>
      </ListItem>
      <ListItem fontSize={`xl`}>
        <NavLink
          to={`/place-to-stay`}
          className={({ isActive }) =>
            isActive ? style.active : style.inactive
          }
        >
          Place to stay
        </NavLink>
      </ListItem>
      <ListItem fontSize={`xl`}>
        <NavLink
          to={`/nfts`}
          className={({ isActive }) =>
            isActive ? style.active : style.inactive
          }
        >
          NFTs
        </NavLink>
      </ListItem>
      <ListItem fontSize={`xl`}>
        <NavLink
          to={`/community`}
          className={({ isActive }) =>
            isActive ? style.active : style.inactive
          }
        >
          Community
        </NavLink>
      </ListItem>
    </OrderedList>
  );
};

export default Links;
