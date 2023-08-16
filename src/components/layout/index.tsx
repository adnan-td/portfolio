"use client";

import { DataStateComponent } from "@/context/data/data.context";
import { LoaderState } from "@/context/loader/loader.context";
import { NavStatusProvider } from "@/context/navstatus/navstatus.context";
import { WidthContext } from "@/context/screenwidth/screenwidth.context";
import { useContext } from "react";
import { FollowerProvider } from "react-mouse-follower";

export default function Sublayout({ children }: { children: React.ReactNode }) {
  const { screenwidth } = useContext(WidthContext);
  return (
    <FollowerProvider visible={screenwidth > 640}>
      <NavStatusProvider>
        <LoaderState>
          <DataStateComponent>{children}</DataStateComponent>
        </LoaderState>
      </NavStatusProvider>
    </FollowerProvider>
  );
}
