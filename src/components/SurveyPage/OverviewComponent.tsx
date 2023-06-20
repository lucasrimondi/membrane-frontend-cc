import { useContext } from "react";
import {
  SurveyFormContext,
  SurveyFormContextProps,
} from "@/context/SurveyFormProvider";
import styled from "styled-components";
import { device } from "@/utils/mediaQueries";

export const OverviewComponent = () => {
  const { surveyAnswers } = useContext(
    SurveyFormContext
  ) as SurveyFormContextProps;

  return (
    <OverviewContainer>
      <OverviewTitle>
        Answers overview ({Object.keys(surveyAnswers).length})
      </OverviewTitle>
      <OverviewAnswerList>
        {Object.keys(surveyAnswers).map((key: string, index: number) => {
          return (
            <ListItem key={index}>
              {key} {surveyAnswers[key]}
            </ListItem>
          );
        })}
        {Object.keys(surveyAnswers).length === 0 && (
          <EmptySurveyMsg>
            Oops! It seems that you couldn't answer any question. Please try
            again later.
          </EmptySurveyMsg>
        )}
      </OverviewAnswerList>
    </OverviewContainer>
  );
};

/*
Styles
*/

const OverviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  padding: 32px;
  margin-bottom: 40px;
`;

const OverviewTitle = styled.h1`
  font-size: 28px;
  padding: 12px;
  text-align: center;
  text-decoration: underline;
  @media ${device.tabletS} {
    font-size: 24px;
  }
  @media ${device.mobileM} {
    font-size: 20px;
  }
  @media ${device.mobileXS} {
    font-size: 18px;
  }
`;

const OverviewAnswerList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  @media ${device.tabletS} {
    padding: 8px;
  }
`;

const ListItem = styled.li`
  margin-bottom: 12px;
  @media ${device.tabletS} {
    font-size: 16px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
  }
  @media ${device.mobileXS} {
    font-size: 12px;
  }
`;

const EmptySurveyMsg = styled.p`
  font-size: 16px;
  text-align: center;
  color: #ff000092;
`;
