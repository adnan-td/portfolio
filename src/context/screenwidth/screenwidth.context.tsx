"use client";

import { useState, createContext, useEffect } from "react";

export const WidthContext = createContext<{ screenwidth: number }>({ screenwidth: null });

export const ScreenWidth = ({ children }: { children: React.ReactNode }) => {
  const [screenwidth, Setscreenwidth] = useState<number>(null);
  useEffect(() => {
    Setscreenwidth(window.innerWidth);
    const handleResize = () => {
      Setscreenwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <WidthContext.Provider value={{ screenwidth }}>{children}</WidthContext.Provider>;
};
