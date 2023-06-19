import { device } from '@/utils/mediaQueries';
import styled from "styled-components";

export const Break = styled.br``;

export const SurveyTitle = styled.h3`
  font-size: 28px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 40px;
  text-decoration: underline;
  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const DailySurveyTitle = styled(SurveyTitle)`
  text-decoration: none;
`;