import styled from "styled-components";
import { device } from "@/utils/mediaQueries";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo src="/logo.png" alt="Logo" />
      </LogoContainer>
      <ButtonsContainer></ButtonsContainer>
    </NavbarContainer>
  );
};

export default Navbar;

/*
Styles
*/

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: row;
  padding: 24px 48px;
  @media ${device.tablet} {
    padding: 24px 24px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 160px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
