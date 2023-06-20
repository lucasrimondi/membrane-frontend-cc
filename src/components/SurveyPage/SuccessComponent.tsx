import {
  ContractContext,
  ContractContextProps,
} from "@/context/ContractProvider";
import { device } from "@/utils/mediaQueries";
import { useContext, useEffect } from "react";
import styled from "styled-components";

const SuccessComponent = () => {
  const { fetchBalance } = useContext(ContractContext) as ContractContextProps;

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <SuccessContainer>
      <SuccessTitle>Thank you for your completing the survey!</SuccessTitle>
      <SuccessText>
        Your answers have been submitted and will be used to help us improve the
        platform. You have been rewarded with 1 $QUIZ token. Please come back
        tomorrow to complete another survey and earn more $QUIZ tokens.
      </SuccessText>
    </SuccessContainer>
  );
};

export default SuccessComponent;

/*
Styles
*/

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 32px;

  @media ${device.tabletS} {
    width: 90%;
  }
  @media ${device.mobileM} {
    width: 95%;
  }
  @media ${device.mobileXS} {
    width: 100%;
  }
`;

const SuccessTitle = styled.h1`
  font-size: 48px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 64px;

  @media ${device.tabletS} {
    font-size: 42px;
    margin-bottom: 60px;
  }
  @media ${device.mobileM} {
    font-size: 38px;
    margin-bottom: 58px;
  }
  @media ${device.mobileXS} {
    font-size: 30px;
    margin-bottom: 46px;
  }
`;

const SuccessText = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 0;
  @media ${device.tabletS} {
    font-size: 22px;
  }
  @media ${device.mobileM} {
    font-size: 20px;
  }
  @media ${device.mobileXS} {
    font-size: 18px;
  }
`;
