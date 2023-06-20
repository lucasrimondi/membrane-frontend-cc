import { useContext } from "react";
import {
  SurveyFormContext,
  SurveyFormContextProps,
} from "@/context/SurveyFormProvider";
import QuestionComponent from "./QuestionComponent";
import { Question } from "@/interfaces/daily-survey-interfaces";

interface Props {
  step: number;
  questions: Question[];
  goToNextQuestion: () => void;
}

export const MultiStep: React.FC<Props> = ({
  step,
  questions,
  goToNextQuestion,
}) => {
  const { surveyAnswers, setSurveyAnswers } = useContext(
    SurveyFormContext
  ) as SurveyFormContextProps;

  const updateAnswers = (value: number, question: Question) => {
    setSurveyAnswers({ ...surveyAnswers, [question.text]: value });
  };

  return (
    <QuestionComponent
      key={step - 1}
      question={questions[step - 1]}
      index={step - 1}
      onChange={updateAnswers}
      goToNextQuestion={goToNextQuestion}
    />
  );
};
