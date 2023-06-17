import Image from "next/image";
import styled from "styled-components";
import { device } from "@/utils/mediaQueries";
import WalletConnectionBtns from "./WalletConnectionBtns";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Image width={160} height={45} src="/logo.png" alt="Logo" />
      </LogoContainer>
      <WalletConnectionBtns />
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
  @media ${device.tabletS} {
    flex-direction: column;
    align-items: flex-start;
  }
  @media ${device.mobileS} {
    padding: 12px 12px;
  }
  @media ${device.mobileXS} {
    padding: 6px 6px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.tabletS} {
    margin-bottom: 32px;
  }
  @media ${device.mobileL} {
    margin-bottom: 24px;
  }
`;
