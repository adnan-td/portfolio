import { useState, createContext, ReactNode } from "react";
interface Props {
  children: ReactNode;
}

interface ContextInterface {
  data: any;
  setData: (data: any) => any;
}

export const DataContext = createContext<ContextInterface>(null);

export const DataStateComponent = ({ children }: Props) => {
  const [data, setData] = useState<boolean>(true);

  const value = { data, setData };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
