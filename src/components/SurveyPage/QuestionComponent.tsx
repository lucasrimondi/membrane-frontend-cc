import useCountdown from "@/hooks/useCountdown";
import { Option, Question } from "@/interfaces/daily-survey-interfaces";
import { useEffect } from "react";
import styled from "styled-components";
import { DailySurveyTitle } from "../ReusableComponents";

interface Props {
  question: Question;
  index: number;
  onChange: (value: number, question: Question) => void;
  goToNextQuestion: () => void;
}

const QuestionComponent: React.FC<Props> = ({
  question,
  index,
  onChange,
  goToNextQuestion,
}) => {
  const [counter, countdownClock] = useCountdown(question.lifetimeSeconds);

  useEffect(() => {
    if (counter === 0) {
      goToNextQuestion();
    }
  }, [counter]);

  return (
    <QuestionContainer>
      <QuestionTitle>
        {index + 1}. {question.text}
      </QuestionTitle>
      <QuestionImage src={question.image} alt="Survey Image" />
      <AnswersContainer role="group">
        {question.options?.map((option: Option, index: number) => {
          return (
            <AnswerLabel key={index}>
              <Field
                type="radio"
                name={question.text}
                value={index + 1}
                onChange={(e) => onChange(parseInt(e.target.value), question)}
              />
              {option.text}
            </AnswerLabel>
          );
        })}
      </AnswersContainer>
      <CountdownContainer>
        <Countdown>{countdownClock}</Countdown>
      </CountdownContainer>
    </QuestionContainer>
  );
};

export default QuestionComponent;

/*
Styles
*/

const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const QuestionTitle = styled(DailySurveyTitle)`
  text-transform: none;
`;

const QuestionImage = styled.img`
  width: 40%;
  min-width: 240px;
  margin-bottom: 48px;
`;

const AnswersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const AnswerLabel = styled.label`
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Field = styled.input`
  margin-right: 12px;
  cursor: pointer;
`;

const CountdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 24px;
`;

const Countdown = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
`;
