import { SurveyFormContext } from "@/context/SurveyFormProvider";
import { useContext, useState } from "react";
import styled from "styled-components";
import DailySurveyCover from "./DailySurveyCover";
import { MultiStep } from "./MultiStep";

const DailySurveyForm = ({ data }: any) => {
  const [index, setIndex] = useState(0);
  const totalPagesCount = data.questions?.length + 1;

  const { surveyAnswers }: any = useContext(SurveyFormContext);

  const surveyButtonFunction = () => {
    if (index < totalPagesCount) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      // submit the survey
      console.log("submit the survey");
      console.log(surveyAnswers);
    }
  };

  return (
    <Form>
      {index === 0 ? (
        <DailySurveyCover data={data} />
      ) : index > 0 && index < totalPagesCount ? (
        <MultiStep questions={data.questions} step={index} />
      ) : (
        <h1>Overview</h1>
      )}
      <SurveyBtn
        onClick={(e) => {
          e.preventDefault();
          surveyButtonFunction();
        }}
      >
        {index === 0
          ? "Start Survey"
          : index > 0 && index < totalPagesCount
          ? "Next"
          : "Submit"}
      </SurveyBtn>
    </Form>
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
  font-size: 20px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;
