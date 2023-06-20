import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { SurveyTitle } from "../ReusableComponents";
import DailySurveyForm from "./DailySurveyForm";

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
      <DailySurveyForm dailySurvey={data} />
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
