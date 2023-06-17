import { useState, createContext, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface Pos {
  x: number;
  y: number;
}

export interface MouseSettings {
  zIndex?: number;
  bgColor?: string;
  skew?: string;
  bg?: JSX.Element;
  scale?: number;
  rotate?: number;
  customPosition?: Pos;
  mixBlendMode?:
    | "initial"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity";
  invert?: boolean;
}

interface ContextInterface {
  options: MouseSettings;
  setOptions: (options: MouseSettings) => void;
  radius: number;
}

export const MouseContext = createContext<ContextInterface>(null);

export const MousePos = ({ children }: Props) => {
  const radius = 12 / 2;

  const [options, setOptions] = useState<MouseSettings>({
    invert: false,
  });

  const value = {
    options,
    setOptions,
    radius,
  };
  return <MouseContext.Provider value={value}>{children}</MouseContext.Provider>;
};
