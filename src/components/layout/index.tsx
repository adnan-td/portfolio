"use client";

import { NavStatusProvider } from "@/context/navstatus/navstatus.context";
import { useEffect, useState } from "react";
import loaderjson from "@/json/loader.json";
import Lottie from "react-lottie";

export default function Sublayout({ children }: { children: React.ReactNode }) {
  return (
    <Loader>
      <NavStatusProvider>{children}</NavStatusProvider>
    </Loader>
  );
}

function Loader({ children }: { children: React.ReactNode }) {
  const [isLoading, setLoadingPage] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 1250);
  }, []);
  return (
    <>
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
    </>
  );
}
