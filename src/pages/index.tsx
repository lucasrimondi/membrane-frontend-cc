import styled from "styled-components";
import { device } from "@/utils/mediaQueries";
import { Break } from "@/components/ReusableComponents";
import { useWeb3Modal } from "@web3modal/react";

export default function Home() {
  const { open } = useWeb3Modal();

  return (
    <HomeContainer>
      <Title>
        An$wer $urveys.
        <Break />
        earn token$.
      </Title>
      <HomeText>
        $urveyfi is a decentralized application that allows you to earn rewards
        in $QUIZ by participating in our daily surveys.
      </HomeText>
      <HomeText>
        To start, please
        <Break />
        <CTA onClick={open}>CONNECT YOUR WALLET</CTA>
      </HomeText>
    </HomeContainer>
  );
}

/*
Styles
*/

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  @media ${device.tablet} {
    padding: 24px 24px;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 0;
  @media ${device.tablet} {
    font-size: 54px;
  }
  @media ${device.mobileL} {
    font-size: 40px;
  }
  @media ${device.mobileS} {
    font-size: 32px;
  }
`;

const HomeText = styled.p`
  margin-top: 64px;
  font-size: 30px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 26px;
    margin-top: 52px;
  }
  @media ${device.mobileL} {
    font-size: 22px;
  }
  @media ${device.mobileS} {
    font-size: 20px;
  }
`;

const CTA = styled.b`
  color: #51a4fb;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 8px;
`;
