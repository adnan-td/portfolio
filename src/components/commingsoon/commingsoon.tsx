"use client";

import { useRouter } from "next/navigation";
import Lottie from "react-lottie";
import animationJson from "../../json/commingsoon.json";
import React, { useContext, useEffect } from "react";
import { LoaderContext } from "../../context/loader/loader.context";

export default function ComingSoon() {
  const { setLoadingPage } = useContext(LoaderContext);
  const navigate = useRouter();

  useEffect(() => {
    setLoadingPage(false);
  }, [setLoadingPage]);

  function handleReturn() {
    navigate.push("/", { scroll: false });
  }

  return (
    <div className="fixed inset-0 z-[1000] bg-white">
      <div className="w-screen flex flex-col gap-10 justify-center items-center h-screen px-7">
        <div className="max-w-xl md:max-w-full">
          <Lottie options={{ loop: true, autoplay: true, animationData: animationJson }} />
        </div>
        <div className="cursor-pointer">
          <button
            onClick={handleReturn}
            className="border border-gray-300 px-9 py-4 rounded-full transition-colors duration-700 hover:bg-black hover:text-white hover:border-0"
          >
            Go back?
          </button>
        </div>
      </div>
    </div>
  );
}
