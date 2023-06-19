import { SurveyFormContext } from "@/context/SurveyFormProvider";
import { useContext } from "react";
import QuestionComponent from "./QuestionComponent";

export const MultiStep = (props: any) => {
  const { surveyAnswers, setSurveyAnswers }: any =
    useContext(SurveyFormContext);

  const updateAnswers = (value: number, question: any) => {
    setSurveyAnswers({ ...surveyAnswers, [question.text]: value });
  };

  return (
    <>
      <QuestionComponent
        key={props.step - 1}
        question={props.questions[props.step - 1]}
        index={props.step - 1}
        onChange={updateAnswers}
      />
    </>
  );
};
