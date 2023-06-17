import styled from "styled-components";
import { Break } from "../ReusableComponents";

const FooterDisclaimer = () => {
  return (
    <Disclaimer>
      $urveyfi @ Membrane Frontend Challenge
      <Break />
      by Lucas Rimondi
    </Disclaimer>
  );
};

export default FooterDisclaimer;

/*
Styles
*/

const Disclaimer = styled.p`
  text-align: center;
`;
