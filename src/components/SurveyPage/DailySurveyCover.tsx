import { useContext, useEffect } from "react";
import styled from "styled-components";
import {
  SurveyFormContext,
  SurveyFormContextProps,
} from "@/context/SurveyFormProvider";
import { DailySurveyTitle, SurveyTitle } from "../ReusableComponents";
import { Survey } from "@/interfaces/daily-survey-interfaces";

interface Props {
  dailySurvey: Survey;
}

const DailySurveyHomeScreen: React.FC<Props> = ({ dailySurvey }) => {
  const { setSurveyAnswers } = useContext(
    SurveyFormContext
  ) as SurveyFormContextProps;

  useEffect(() => {
    setSurveyAnswers({});
  }, []);

  return (
    <>
      <SurveyTitle>Daily Survey:</SurveyTitle>
      <DailySurveyTitle>{dailySurvey.title}</DailySurveyTitle>
      <SurveyImage src={dailySurvey.image} alt="Survey Image" />
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
