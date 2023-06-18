import styled from "styled-components";

const DailySurvey = () => {
  return (
    <DailySurveyContainer>
      <SurveyTitle>Daily Survey: Survey Title</SurveyTitle>
      <SurveyImage src="/githubLogo.png" alt="Survey Image" />
      <StartSurveyBtn>Start Survey</StartSurveyBtn>
    </DailySurveyContainer>
  );
};

export default DailySurvey;

/*
Styles
*/

const DailySurveyContainer = styled.div`
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
