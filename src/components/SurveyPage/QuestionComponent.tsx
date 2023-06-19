import { Option } from "@/interfaces/daily-survey-interfaces";
import styled from "styled-components";
import { DailySurveyTitle } from "../ReusableComponents";

const QuestionComponent = ({ question, index, onChange }: any) => {
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
                value={option.text}
                onChange={(e) => onChange(e.target.value, question)}
              />
              {option.text}
            </AnswerLabel>
          );
        })}
      </AnswersContainer>
      <CountdownContainer>
        <Countdown>{question.lifetimeSeconds}</Countdown>
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
  align-items: center;
  width: 100%;
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
