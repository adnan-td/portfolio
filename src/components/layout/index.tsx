"use client";

import { NavStatusProvider } from "@/context/navstatus/navstatus.context";
import { WidthContext } from "@/context/screenwidth/screenwidth.context";
import { useContext } from "react";
import { FollowerProvider } from "react-mouse-follower";

export default function Sublayout({ children }: { children: React.ReactNode }) {
  const { screenwidth } = useContext(WidthContext);
  return (
    <FollowerProvider visible={screenwidth > 640}>
      <NavStatusProvider>{children}</NavStatusProvider>
    </FollowerProvider>
  );
}
