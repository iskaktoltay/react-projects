import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../img/logo.svg';
import styled from "styled-components"

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav scrollPosition={scrollPosition}>
      <NavImage
        width={30}
        height={30}
        fill={scrollPosition > 30 ? 'white' : 'black'}
      />
      <NavGroup>
        <NavLink>Home</NavLink>
        <NavLink>Content</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </NavGroup>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 2;
  display: flex;
  background: white;
  align-items: center;
  justify-content: space-between;
  transition: height 0.5s, box-shadow 0.3s, background 0.3s;
  a {
    transition: color 0.3s;
  }
  ${props => props.scrollPosition > 30 ? 
    `
      background: black;
      box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
      height: 80px;
      a {
        color: white
      }
    ` : ''
  };
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 3vw;
`;

const NavLink = styled.a`
  margin: 0 10px;
  color: black;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const NavImage = styled(Logo)`
  width: 30px;
  heigth: 20px;
  margin-left: 3vw;
`;

export default Navbar
export {Navbar}