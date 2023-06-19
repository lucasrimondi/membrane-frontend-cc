import { createContext, ReactNode, useState } from "react";

interface SurveyFormContextProps {
  //   fetchBalance: () => Promise<void>;
  //   balance: any;
  //   isBalanceLoading: boolean;
}

export const SurveyFormContext = createContext<
  SurveyFormContextProps | undefined
>(undefined);

interface SurveyFormProviderProps {
  children: ReactNode;
}

const SurveyFormProvider = ({ children }: SurveyFormProviderProps) => {
  const [surveyAnswers, setSurveyAnswers] = useState({});

  return (
    <SurveyFormContext.Provider value={{ surveyAnswers, setSurveyAnswers }}>
      {children}
    </SurveyFormContext.Provider>
  );
};

export default SurveyFormProvider;
