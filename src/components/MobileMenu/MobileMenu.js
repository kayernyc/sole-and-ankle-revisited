/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

import { WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
      <DialogContentWrapper>
        <DialogContentStyle aria-label='nav'>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <SideNav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </SideNav>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </DialogContentStyle>
      </DialogContentWrapper>
  );
};

const CloseButton = styled(UnstyledButton)`
  margin-left: auto;
`

const DialogContentWrapper = styled(DialogOverlay)`
  background-color: rgba(96, 100, 108, 0.8);
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`
const DialogContentStyle = styled(DialogContent)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px 16px 32px 32px;
  width: 300px;
`

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

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: .875rem;
  `

const FooterLink = styled.a`
  color:  var(--color-gray-700);
  display: block;
  font-size: .875rem;
  text-decoration: none;
`

const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:first-of-type {
    color:  var(--color-secondary);
  }

  > * {
    display: inline-flex;
  }
`


export default MobileMenu;
