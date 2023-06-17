import { useEffect } from "react";
import styled from "styled-components";

import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { useWeb3Modal } from "@web3modal/react";
import { goerli } from "viem/chains";
import { useAccount } from "wagmi";
import { device } from "@/utils/mediaQueries";

const WalletConnectionBtns = () => {
  const { setDefaultChain } = useWeb3Modal();
  const { isDisconnected } = useAccount();

  useEffect(() => {
    setDefaultChain(goerli);
  }, [isDisconnected]);

  return (
    <ButtonsContainer>
      <Web3NetworkSwitch />
      <Web3Button icon="hide" label="Connect Wallet" balance="hide" />
    </ButtonsContainer>
  );
};

export default WalletConnectionBtns;

/*
Styles
*/

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  > w3m-network-switch {
    margin-right: 12px;
  }
  @media ${device.tabletS} {
    width: 100%;
  }
`;
