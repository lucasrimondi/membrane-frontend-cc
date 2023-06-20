import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { useAccount } from "wagmi";
import { writeContract, waitForTransaction } from "@wagmi/core";
import ABI from "../abi.json";

export interface SurveyFormContextProps {
  surveyAnswers: {};
  setSurveyAnswers: Dispatch<SetStateAction<{}>>;
  submitAnswers: (surveyId: number, answerIds: number[]) => Promise<void>;
  isSubmitting: boolean;
  isTxError: boolean;
  setIsTxError: Dispatch<SetStateAction<boolean>>;
  isSuccess: boolean;
}

export const SurveyFormContext = createContext<
  SurveyFormContextProps | undefined
>(undefined);

interface SurveyFormProviderProps {
  children: ReactNode;
}

const SurveyFormProvider = ({ children }: SurveyFormProviderProps) => {
  const [surveyAnswers, setSurveyAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isTxError, setIsTxError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const { address: userAddress } = useAccount();

  const submitAnswers = async (
    surveyId: number,
    answerIds: number[]
  ): Promise<void> => {
    setIsSubmitting(true);
    setIsTxError(false);
    setIsSuccess(false);
    try {
      const { hash } = await writeContract({
        address: `0x${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`,
        abi: ABI,
        functionName: "submit",
        args: [surveyId, answerIds],
        account: userAddress,
      });
      console.log(hash);
      await fetchTxStatus(hash);
    } catch (error) {
      setIsSubmitting(false);
      setIsTxError(true);
      console.error(error);
    }
  };

  const fetchTxStatus = async (hash: `0x${string}`): Promise<void> => {
    try {
      const data = await waitForTransaction({
        hash,
      });
      console.log(data);
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      setIsSubmitting(false);
      setIsTxError(true);
      console.error(error);
    }
  };

  return (
    <SurveyFormContext.Provider
      value={{
        surveyAnswers,
        setSurveyAnswers,
        submitAnswers,
        isSubmitting,
        isTxError,
        setIsTxError,
        isSuccess,
      }}
    >
      {children}
    </SurveyFormContext.Provider>
  );
};

export default SurveyFormProvider;
