import { useState, createContext, useEffect, ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
}

interface Pos {
  x: number;
  y: number;
}

interface MouseSettings {
  zIndex?: number;
  bgColor?: string;
  skew?: string;
  bg?: JSX.Element;
  scale?: number;
  rotate?: number;
  customPosition?: Pos;
  mixBlendMode?: "difference" | "initial";
  invert?: boolean;
}

interface ContextInterface {
  options: MouseSettings;
  setOptions: (options: MouseSettings) => void;
  radius: number;
  pos: Pos;
}

export const MouseContext = createContext<ContextInterface>(null);

export const MousePos = ({ children }: Props) => {
  const radius = 12 / 2;
  const [pos, setPos] = useState<Pos>({
    x: 0,
    y: 0,
  });
  const [options, setOptions] = useState<MouseSettings>({
    invert: false,
  });

  useEffect(() => {
    function mouseMove(event: any) {
      setPos({
        x: event.clientX - radius,
        y: event.clientY - radius,
      });
    }
    window.addEventListener("mousemove", mouseMove);
    return () => {};
  }, []);

  // useEffect(() => {
  //   console.log(options);
  // }, [options]);

  const value = {
    options,
    setOptions,
    radius,
    pos,
  };
  return <MouseContext.Provider value={value}>{children}</MouseContext.Provider>;
};
