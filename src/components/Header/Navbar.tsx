import Image from "next/image";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
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
  padding: 0 24px;
  height: 100px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
