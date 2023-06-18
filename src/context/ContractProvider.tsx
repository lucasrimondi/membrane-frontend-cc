import { createContext, ReactNode, useState } from "react";
import { useAccount } from "wagmi";
import ABI from "../abi.json";
import { readContract } from "@wagmi/core";

export interface ContractContextProps {
  fetchBalance: () => Promise<void>;
  balance: any;
  isBalanceLoading: boolean;
}

export const ContractContext = createContext<ContractContextProps | undefined>(
  undefined
);

interface ContractProviderProps {
  children: ReactNode;
}

const ContractProvider = ({ children }: ContractProviderProps) => {
  const { address: userAddress } = useAccount();
  const [balance, setBalance] = useState<any>(undefined);
  const [isBalanceLoading, setIsBalanceLoading] = useState<boolean>(false);

  const fetchBalance = async (): Promise<void> => {
    setIsBalanceLoading(true);
    try {
      const data = await readContract({
        address: `0x${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`,
        abi: ABI,
        functionName: "balanceOf",
        args: [userAddress],
      });
      setBalance(data);
    } catch (error) {
      console.error("Network error", error);
    }
    setIsBalanceLoading(false);
  };

  return (
    <ContractContext.Provider
      value={{
        fetchBalance,
        balance,
        isBalanceLoading,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default ContractProvider;
