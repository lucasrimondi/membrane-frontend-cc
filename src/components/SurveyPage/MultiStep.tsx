import { useContext } from "react";
import { SurveyFormContext } from "@/context/SurveyFormProvider";
import { Question } from "@/interfaces/daily-survey-interfaces";
import QuestionComponent from "./QuestionComponent";

export const MultiStep = ({ step, questions, goToNextQuestion }: any) => {
  const { surveyAnswers, setSurveyAnswers }: any =
    useContext(SurveyFormContext);

  const updateAnswers = (value: number, question: Question) => {
    setSurveyAnswers({ ...surveyAnswers, [question.text]: value });
  };

  return (
    <>
      <QuestionComponent
        key={step - 1}
        question={questions[step - 1]}
        index={step - 1}
        onChange={updateAnswers}
        goToNextQuestion={goToNextQuestion}
      />
    </>
  );
};
