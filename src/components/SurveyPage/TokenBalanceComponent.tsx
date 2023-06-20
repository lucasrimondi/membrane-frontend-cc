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
  font-size: 28px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 42px;
  margin-top: 12px;
  @media ${device.tabletS} {
    font-size: 26px;
    margin-bottom: 40px;
  }
  @media ${device.mobileM} {
    font-size: 24px;
    margin-bottom: 38px;
  }
  @media ${device.mobileXS} {
    font-size: 22px;
    margin-bottom: 36px;
  }
`;
