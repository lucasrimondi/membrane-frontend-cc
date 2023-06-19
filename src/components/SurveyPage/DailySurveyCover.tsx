import styled from "styled-components";
import { DailySurveyTitle, SurveyTitle } from "../ReusableComponents";

const DailySurveyHomeScreen = ({ data }: any) => {
  return (
    <>
      <SurveyTitle>Daily Survey:</SurveyTitle>
      <DailySurveyTitle>{data.title}</DailySurveyTitle>
      <SurveyImage src={data.image} alt="Survey Image" />
    </>
  );
};

export default DailySurveyHomeScreen;

/*
Styles
*/

const SurveyImage = styled.img`
  width: 40%;
  min-width: 240px;
  margin-bottom: 48px;
`;
