import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #3a3a3a;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  & > a {
    margin: 0 1rem;
    color: white;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Welt Research</Logo>
      <Nav>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#qualities">Unique Qualities</a>
        <a href="#revenue">Revenue</a>
        <a href="#audience">Target Audience</a>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
