import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
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
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletMax} {
    align-items: center;
    flex-grow: 1;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
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
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
