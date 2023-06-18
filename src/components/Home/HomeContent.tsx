import styled from "styled-components";
import { useWeb3Modal } from "@web3modal/react";
import { device } from "@/utils/mediaQueries";
import { Break } from "../ReusableComponents";

const HomeContent = () => {
  const { open } = useWeb3Modal();

  return (
    <>
      <HomeTitle>
        Complete $urveys.
        <Break />
        earn token$.
      </HomeTitle>
      <HomeText>
        $urveyfi is a decentralized application that allows you to earn rewards
        in $QUIZ by participating in our daily surveys.
      </HomeText>
      <CtaText>
        To start, please
        <Break />
        <CTA onClick={open}>CONNECT YOUR WALLET</CTA>
      </CtaText>
    </>
  );
};

export default HomeContent;

/*
Styles
*/

const HomeTitle = styled.h1`
  font-size: 60px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 0;
  @media ${device.tablet} {
    font-size: 52px;
  }
  @media ${device.mobileL} {
    font-size: 46px;
  }
  @media ${device.mobileS} {
    font-size: 38px;
  }
`;

const HomeText = styled.p`
  margin-top: 64px;
  font-size: 30px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 26px;
    margin-top: 48px;
  }
  @media ${device.mobileL} {
    font-size: 22px;
  }
  @media ${device.mobileS} {
    font-size: 18px;
  }
`;

const CtaText = styled(HomeText)`
  margin-bottom: 48px;
`;

const CTA = styled.b`
  color: #51a4fb;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 8px;
`;
