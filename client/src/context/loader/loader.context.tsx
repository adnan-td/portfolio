import { useState, createContext, ReactNode } from "react";
import Lottie from "react-lottie";
import loaderjson from "../../json/loader.json";
interface Props {
  children: ReactNode;
}

interface ContextInterface {
  isLoading: boolean;
  setLoadingPage: (isLoading: boolean) => any;
}

export const LoaderContext = createContext<ContextInterface>(null);

export const LoaderState = ({ children }: Props) => {
  const [isLoading, setLoadingPage] = useState<boolean>(true);

  const value = {
    isLoading,
    setLoadingPage,
  };
  return (
    <LoaderContext.Provider value={value}>
      {isLoading && (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center z-[1000] bg-white">
          <Lottie
            options={{ loop: true, autoplay: true, animationData: loaderjson }}
            height={200}
            width={200}
          />
        </div>
      )}
      <div className={isLoading ? "hidden" : ""}>{children}</div>
    </LoaderContext.Provider>
  );
};
