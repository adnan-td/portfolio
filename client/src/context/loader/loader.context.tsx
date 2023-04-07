import { useState, createContext, ReactNode } from "react";
import style from "./loader.module.scss";
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
          <svg className={style["loader"]}>
            <g>
              <path d="M 50,100 A 1,1 0 0 1 50,0" />
            </g>
            <g>
              <path d="M 50,75 A 1,1 0 0 0 50,-25" />
            </g>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#111", stopOpacity: "1" }} />
                <stop offset="100%" style={{ stopColor: "#444", stopOpacity: "1" }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
      <div className={isLoading ? "hidden" : ""}>{children}</div>
    </LoaderContext.Provider>
  );
};
