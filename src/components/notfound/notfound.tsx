"use client";

import Lottie from "react-lottie";
import animationJson from "../../json/notfound.json";

export default function NotFoundComponent() {
  return (
    <div className="fixed inset-0 z-[1000] bg-white">
      <div className="w-screen flex flex-col gap-10 justify-center items-center h-screen px-7">
        <div className="max-w-xl md:max-w-full">
          <Lottie options={{ loop: true, autoplay: true, animationData: animationJson }} />
        </div>
      </div>
    </div>
  );
}
