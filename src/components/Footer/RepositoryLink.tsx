import Image from "next/image";
import styled from "styled-components";
import { device } from "@/utils/mediaQueries";

const RepositoryLink = () => {
  return (
    <GithubLogoContainer>
      <Image
        src="/githubLogo.png"
        alt="Logo"
        onClick={() =>
          window.open(
            "https://github.com/lucasrimondi/membrane-frontend-cc",
            "_blank"
          )
        }
        width={40}
        height={40}
      />
    </GithubLogoContainer>
  );
};

export default RepositoryLink;

const GithubLogoContainer = styled.div`
  width: 40px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.4s;
  :hover {
    transform: scale(1.1);
  }
  @media ${device.tablet} {
    margin-top: 16px;
  }
`;
