import styled from "styled-components";
import { device } from "@/utils/mediaQueries";

const RepositoryLink = () => {
  return (
    <GithubLogoContainer>
      <GithubLogo src="/githubLogo.png" alt="Logo" />
    </GithubLogoContainer>
  );
};

export default RepositoryLink;

const GithubLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    margin-top: 16px;
  }
`;

const GithubLogo = styled.img`
  width: 40px;
  @media ${device.tablet} {
    width: 32px;
  }
`;
