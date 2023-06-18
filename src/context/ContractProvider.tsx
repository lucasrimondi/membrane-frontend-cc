import { createContext, useState } from "react";
import { useAccount } from "wagmi";
import ABI from "../abi.json";
import { readContract } from "@wagmi/core";

export const ContractContext = createContext<any>(undefined);

const ContractProvider = (props: any) => {
  const { address: userAddress } = useAccount();
  const [balance, setBalance] = useState<any>(undefined);
  const [isBalanceLoading, setIsBalanceLoading] = useState<boolean>(false);

  const fetchBalance = async () => {
    setIsBalanceLoading(true);
    const data: any = await readContract({
      address: `0x${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`,
      abi: ABI,
      functionName: "balanceOf",
      args: [userAddress],
    });
    setBalance(data);
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
      {props.children}
    </ContractContext.Provider>
  );
};

export default ContractProvider;
