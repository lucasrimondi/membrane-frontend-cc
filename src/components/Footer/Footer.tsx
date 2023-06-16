import styled from "styled-components";
import { device } from "@/utils/mediaQueries";
import FooterDisclaimer from "./FooterDisclaimer";
import RepositoryLink from "./RepositoryLink";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterDisclaimer />
      <RepositoryLink />
    </FooterContainer>
  );
};

export default Footer;

/*
Styles
*/

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px 48px;
  color: white;
  background-color: #51a4fb;
  @media ${device.tablet} {
    padding: 12px 24px;
    flex-direction: column;
    font-size: 14px;
  }
`;
