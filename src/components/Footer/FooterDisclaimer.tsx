import styled from "styled-components";

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

const Break = styled.br``;
