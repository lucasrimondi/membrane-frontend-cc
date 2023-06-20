import styled from "styled-components";
import { device } from "@/utils/mediaQueries";
import TokenBalanceComponent from "@/components/SurveyPage/TokenBalanceComponent";
import DailySurveyComponent from "@/components/SurveyPage/DailySurveyComponent";

const Survey = () => {
  return (
    <SurveyPageContainer>
      <TokenBalanceComponent />
      <DailySurveyComponent />
    </SurveyPageContainer>
  );
};

export default Survey;

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
