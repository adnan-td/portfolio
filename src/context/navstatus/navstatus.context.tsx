import { useState, createContext, useEffect } from "react";

export const NavStatusContext = createContext<{
  isInverted: boolean;
  setIsInverted: (isInverted: boolean) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}>({
  isInverted: false,
  setIsInverted: (isInverted) => {},
  isOpen: false,
  setIsOpen: (isOpen) => {},
});

export const NavStatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [isInverted, setIsInverted] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const value = {
    isInverted,
    setIsInverted,
    isOpen,
    setIsOpen,
  };
  return <NavStatusContext.Provider value={value}>{children}</NavStatusContext.Provider>;
};
