import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { device } from "@/utils/mediaQueries";
import { Break } from "../ReusableComponents";

const DailySurveyComponent = () => {
  const { isLoading, isError, data } = useQuery(["dailySurvey"], async () => {
    const res = await fetch("/api/dailySurvey");
    return res.json();
  });

  if (isLoading) return <SurveyTitle>Loading...</SurveyTitle>;
  if (isError)
    return <SurveyTitle>Error ocurred! Please come back later</SurveyTitle>;
  return (
    <DailySurveyContainer>
      <SurveyTitle>
        <b>Daily Survey:</b>
        <Break />
        {data?.title}
      </SurveyTitle>
      <SurveyImage src={data?.image} alt="Survey Image" />
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
