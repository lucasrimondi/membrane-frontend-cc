import { device } from "@/utils/mediaQueries";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Break } from "../ReusableComponents";

const DailySurveyComponent = () => {
  const [survey, setSurvey] = useState<any>();
  //inside a useEffect, create a function that will fetch the daily survey from the backend
  //use the useEffect to call the function
  //use the useEffect to set the state of the daily survey
  //use the state to render the daily survey
  useEffect(() => {
    const getDailySurvey = async () => {
      const response = await fetch("/api/dailySurvey");
      const data = await response.json();
      console.log(data);
      setSurvey(data);
    };
    try {
      getDailySurvey();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <DailySurveyContainer>
      <SurveyTitle>
        <b>Daily Survey:</b>
        <Break />
        {survey?.title}
      </SurveyTitle>
      <SurveyImage src={survey?.image} alt="Survey Image" />
      <StartSurveyBtn>Start Survey</StartSurveyBtn>
    </DailySurveyContainer>
  );
};

export default DailySurveyComponent;

/*
Styles
*/

const DailySurveyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-bottom: 60px;
`;

const SurveyTitle = styled.h3`
  font-size: 28px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 48px;
  > b {
    text-decoration: underline;
  }
  @media ${device.tablet} {
    font-size: 24px;
  }
`;

const SurveyImage = styled.img`
  width: 40%;
  max-width: 120px;
  margin-bottom: 48px;
`;

const StartSurveyBtn = styled.button`
  height: 40px;
  background-color: #51a4fb;
  color: white;
  padding: 0px 15px 1px;
  cursor: pointer;
  border: none;
  font-family: "Sen";
  font-size: 16px;
`;
