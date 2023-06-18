import styled from "styled-components";
import { device } from "@/utils/mediaQueries";

const Survey = () => {
  return (
    <SurveyPageContainer>
      <TokenBalanceContainer>
        <TokenBalance>Balance: --.-- $QUIZ</TokenBalance>
      </TokenBalanceContainer>
      <DailySurvey>
        <SurveyTitle>Daily Survey: Survey Title</SurveyTitle>
        <SurveyImage src="/githubLogo.png" alt="Survey Image" />
        <StartSurveyBtn>Start Survey</StartSurveyBtn>
      </DailySurvey>
    </SurveyPageContainer>
  );
};

export default Survey;

/*
Styles
*/

const SurveyPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  @media ${device.tablet} {
    padding: 24px 24px;
  }
`;

const TokenBalanceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TokenBalance = styled.h2`
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 72px;
`;

const DailySurvey = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-bottom: 60px;
`;

const SurveyTitle = styled.h3`
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 48px;
`;

const SurveyImage = styled.img`
  width: 40%;
  margin-bottom: 48px;
`;

const StartSurveyBtn = styled.button`
  height: 40px;
  background-color: #51a4fb;
  color: white;
  padding: 0px 15px 1px;
  cursor: pointer;
  border: none;
  font-family: "Sen";
  font-size: 16px;
`;
