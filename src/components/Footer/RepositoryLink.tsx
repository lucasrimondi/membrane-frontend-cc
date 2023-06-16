import styled from "styled-components";
import { device } from "@/utils/mediaQueries";

const RepositoryLink = () => {
  return (
    <GithubLogoContainer>
      <GithubLogo
        src="/githubLogo.png"
        alt="Logo"
        onClick={() =>
          window.open(
            "https://github.com/lucasrimondi/membrane-frontend-cc",
            "_blank"
          )
        }
      />
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
  cursor: pointer;
  transition: transform 0.4s;
  :hover {
    transform: scale(1.1);
  }
`;
