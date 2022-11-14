import { OrderedList, ListItem, Image } from '@chakra-ui/react';
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
      ml={{ xl: 20 }}
    >
      <ListItem fontSize={`xl`}>
        <NavLink
          to={`/`}
          className={({ isActive }) =>
            isActive ? style.active : style.inactive
          }
        >
          <Image
            display={{ base: `inline`, xl: `none` }}
            mr={2}
            w="1rem"
            src="https://img.icons8.com/material-outlined/24/FFFFFF/home-page.png"
            alt="home"
          />
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
          <Image
            display={{ base: `inline`, xl: `none` }}
            mr={2}
            w="1rem"
            src="https://img.icons8.com/metro/26/FFFFFF/place-marker.png"
            alt="home"
          />
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
          <Image
            display={{ base: `inline`, xl: `none` }}
            mr={2}
            w="1rem"
            src="https://img.icons8.com/external-glyph-wichaiwi/64/FFFFFF/external-nft-non-fungible-token-glyph-wichaiwi-8.png"
            alt="nft"
          />
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
          <Image
            display={{ base: `inline`, xl: `none` }}
            mr={2}
            w="1rem"
            src="https://img.icons8.com/metro/26/FFFFFF/conference-call.png"
            alt="community"
          />
          Community
        </NavLink>
      </ListItem>
    </OrderedList>
  );
};

export default Links;
