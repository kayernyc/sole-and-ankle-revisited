import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import { QUERIES } from '../../constants';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <SiteHeader>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/fake-1-category">Fake1</NavLink>
          <NavLink href="/fake-2-category">Fake2</NavLink>
          <NavLink href="/fake-3-category">Fake3</NavLink>
          <NavLink href="/fake-4-category">Fake4</NavLink>
        </Nav>
        <PhoneHeader>
          <UnstyledButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Shopping bag</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <PhoneHeaderSearch id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
          <Icon id="menu" />
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </PhoneHeader>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </SiteHeader>
  );
};

const SiteHeader = styled.header`
  isolation: isolate;
  z-index: 1;
`

const PhoneHeaderSearch = styled(Icon)`
  margin-top: 1px;
  margin-right: -1px;
`

const PhoneHeader = styled.div`
  display: none;
  
  @media ${QUERIES.tabletMax} { 
    display: inline-flex;
    align-items: center;
    display: inline-flex;
    gap: 34px;
    justify-content: flex-end;
    width: 100%;

    & > * {
      flex: 0;
    }
  }

  @media ${QUERIES.phoneMax} {
    gap: 17px;
  }
`

const MainHeader = styled.div`
  align-items: baseline;
  display: flex;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-900);
  overflow-x: auto;
  

  @media ${QUERIES.tabletMax} {
    align-items: center;
    flex-grow: 1;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletMax} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
