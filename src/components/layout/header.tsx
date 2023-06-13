import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderWrap>
      <NavBar>
        <NavList to={"/"}>Home</NavList>
        <NavList to={"/"}>Home</NavList>
        <NavList to={"/"}>Home</NavList>
        <NavList to={"/"}>Home</NavList>
      </NavBar>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  /* height: 100px;
  background-color: #000000; */
`;

const NavBar = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: inset 0 -1px ${(props) => props.theme.boxShadow};
`;

const NavList = styled(Link)``;
