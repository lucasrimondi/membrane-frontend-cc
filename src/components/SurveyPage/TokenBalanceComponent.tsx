import { useContext, useEffect } from "react";
import styled from "styled-components";
import {
  ContractContext,
  ContractContextProps,
} from "@/context/ContractProvider";
import { device } from "@/utils/mediaQueries";

const TokenBalanceComponent = () => {
  const { fetchBalance, balance, isBalanceLoading } = useContext(
    ContractContext
  ) as ContractContextProps;

  useEffect(() => {
    fetchBalance();
  }, []);

  console.log("balance", balance);

  return (
    <TokenBalanceContainer>
      <TokenBalance>
        Balance: {isBalanceLoading ? "Loading..." : balance + " $QUIZ"}
      </TokenBalance>
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
  margin-bottom: 64px;
  @media ${device.tabletS} {
    font-size: 30px;
    margin-bottom: 60px;
  }
  @media ${device.mobileM} {
    font-size: 24px;
    margin-bottom: 58px;
  }
  @media ${device.mobileXS} {
    font-size: 22px;
    margin-bottom: 46px;
  }
`;
