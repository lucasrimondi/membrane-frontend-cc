import styled from "styled-components";

const TokenBalanceComponent = () => {
  return (
    <TokenBalanceContainer>
      <TokenBalance>Balance: --.-- $QUIZ</TokenBalance>
    </TokenBalanceContainer>
  );
};

export default TokenBalanceComponent;

/*
Styles
*/

const TokenBalanceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TokenBalance = styled.h2`
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 72px;
`;
