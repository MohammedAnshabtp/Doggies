import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import puppy from "../assets/images/puppy.png";


export default function Navbar() {
  return (
    <>
      <HeaderContainer>
        <Logo src={puppy} alt="Logo" />
        <RightContainer>
          <LoginButton to="/login">Logout</LoginButton>
        </RightContainer>
      </HeaderContainer>
      <Main>
        <NavBar>
          <NavItems>
            <NavList>
              <Link to="/">HOME</Link>
            </NavList>
            <NavList>
              <Link to="/breeds">BREEDS</Link>
            </NavList>
            <NavList>
              <Link to="/gallery">GALLERY</Link>
            </NavList>
            <NavList>
              <Link to="/search">SEARCH</Link>
            </NavList>
            <NavList>
              <Link to="/uploads">UPLOADS</Link>
            </NavList>
          </NavItems>
        </NavBar>
      </Main>
    </>
  );
}
const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px 60px;
  display: flex;
  justify-content: space-between;
  background-color: black;
`;
const Logo = styled.img`
  width: 100px;
  display: block;
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LoginButton = styled(Link)`
  background: #990000;
  border-radius: 4px;
  padding: 13px 45px;
  color: #fff;
  font-size: 18px;
  border-radius: 4px;
  font-weight: bold;
`;
// const HeaderBox =styled.div`
//     width:100%;
//     margin:0 auto;
//     height:100%;
//     background:#181818;
// `;
// const RightSection =styled.div`
//     display:flex;
//     align-items:center;
//     justify-content:space-between;
//     padding:10px 100px;
//     margin: 0;
//     overflow: hidden;

// `;
// const LeftSection= styled.div`
//     display:flex;
// `;
// const Logo =styled.img`
//     width:15%;
//     margin-right:24px;
// `;
// const HeadName = styled.p`
//     color:#fff;
//     font-size:30px;
//     font-weight:700;
//     margin-top:20px;
// `;
// const Button = styled(Link)`
//     background:#990000;
//     color:#fff;
//     font-size:16px;
//     font-weight:600;
//     padding:10px 15px;
//     display:inline-block;
//     border:none;
//     border-radius:10px;
//     cursor:pointer;
// `;
const NavBar = styled.nav``;
const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 20px auto;
  padding: 0;
  font-color: #fff;
`;
const Main = styled.div`
  background: #ff3333;
  padding: 3px;
  margin: 0px;
`;
const NavList = styled.div`
  color: #fff;
`;
