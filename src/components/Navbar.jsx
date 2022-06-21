import React from "react";
import styled from "styled-components";


const Nav = styled.nav`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e7e6e6;
  height: 50px;
  max-height: 50px;
  width: 100%;
  max-width: 100%;
  position: fixed;
  top: 0;
  z-index: 30;
`;

const Logo = styled.img`
  margin-left: 5%;
  margin-right: auto;
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo
        id="logo"
        src="https://cdn.shopify.com/s/files/1/0454/8316/3809/files/logo-full_1_180x.png?v=1602639862"
        alt="Logo"
      />
    </Nav>
  );
}

