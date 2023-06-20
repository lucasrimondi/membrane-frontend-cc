import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {
  SurveyFormContext,
  SurveyFormContextProps,
} from "@/context/SurveyFormProvider";
import DailySurveyCover from "./DailySurveyCover";
import { MultiStep } from "./MultiStep";
import { OverviewComponent } from "./OverviewComponent";
import SuccessComponent from "./SuccessComponent";
import { Survey } from "@/interfaces/daily-survey-interfaces";

interface Props {
  dailySurvey: Survey;
}

const DailySurveyForm: React.FC<Props> = ({ dailySurvey }) => {
  const [index, setIndex] = useState(0);
  const totalPagesCount = dailySurvey.questions?.length + 1;

  const {
    surveyAnswers,
    isSubmitting,
    submitAnswers,
    isTxError,
    isSuccess,
    setIsTxError,
  } = useContext(SurveyFormContext) as SurveyFormContextProps;

  const surveyButtonFunction = () => {
    if (index < totalPagesCount) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      const answerIdsArray: number[] = Object.values(surveyAnswers);
      submitAnswers(dailySurvey.id, answerIdsArray);
    }
  };

  useEffect(() => {
    if (isTxError) {
      setTimeout(() => {
        setIsTxError(false);
      }, 3000);
    }
  }, [isTxError]);

  return (
    <>
      {!isSuccess ? (
        <Form>
          {index === 0 ? (
            <DailySurveyCover dailySurvey={dailySurvey} />
          ) : index > 0 && index < totalPagesCount ? (
            <MultiStep
              questions={dailySurvey.questions}
              step={index}
              goToNextQuestion={surveyButtonFunction}
            />
          ) : (
            <OverviewComponent />
          )}
          {!isSubmitting ? (
            <SurveyBtn
              onClick={(e) => {
                e.preventDefault();
                surveyButtonFunction();
              }}
              disabled={
                index === totalPagesCount &&
                Object.keys(surveyAnswers).length === 0
              }
            >
              {index === 0
                ? "Start Survey"
                : index > 0 && index < totalPagesCount
                ? "Next >"
                : "Submit"}
            </SurveyBtn>
          ) : (
            <SurveyBtn disabled>Submitting...</SurveyBtn>
          )}
          {isTxError && (
            <ErrorMsg>Error ocurred! Please try again later.</ErrorMsg>
          )}
        </Form>
      ) : (
        <SuccessComponent />
      )}
    </>
  );
};

export default DailySurveyForm;

/*
Styles
*/

const SurveyBtn = styled.button`
  height: 40px;
  background-color: #51a4fb;
  color: white;
  padding: 0px 15px 1px;
  cursor: pointer;
  border: none;
  font-family: "Sen";
  font-size: 18px;
  :disabled {
    background-color: #b3b3b3;
    cursor: not-allowed;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const ErrorMsg = styled.p`
  font-size: 16px;
  text-align: center;
  color: #ff000092;
  margin-top: 8px;
`;
