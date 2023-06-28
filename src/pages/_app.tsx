import { useEffect } from "react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
//web3 configs
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import ContractProvider from "@/context/ContractProvider";
//react-query
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SurveyFormProvider from "@/context/SurveyFormProvider";

const reactQueryClient = new QueryClient();

// 1. Get projectID at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;

// 2. Configure wagmi client
const chains = [goerli];
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.remove();
    }
  }, []);

  // 4. Wrap your app with WagmiProvider and add <Web3Modal /> component
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <QueryClientProvider client={reactQueryClient}>
          <ContractProvider>
            <SurveyFormProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </SurveyFormProvider>
          </ContractProvider>
        </QueryClientProvider>
      </WagmiConfig>

      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeVariables={{
          "--w3m-font-family": "Sen",
          "--w3m-button-border-radius": "0",
          "--w3m-accent-color": "#51a4fb",
          "--w3m-background-color": "white",
          "--w3m-button-hover-highlight-border-radius": "0",
          "--w3m-container-border-radius": "0",
          "--w3m-background-border-radius": "0",
          "--w3m-notification-border-radius": "0",
          "--w3m-text-medium-regular-weight": "normal",
          "--w3m-text-medium-regular-letter-spacing": "0",
          "--w3m-logo-image-url": "/modalLogo.png",
        }}
        explorerExcludedWalletIds={"ALL"}
        explorerRecommendedWalletIds={[
          //"metamask" wallet id
          "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
        ]}
      />
    </>
  );
}
