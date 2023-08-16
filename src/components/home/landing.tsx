"use client";

import BgVideo from "@/components/home/hovervideo";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { MouseSettings } from "react-mouse-follower/dist/types";

export default function LandingPage() {
  const mouseOuterOptions: MouseSettings = {
    backgroundColor: "white",
    mixBlendMode: "difference",
    scale: 15,
    backgroundElement: <BgVideo />,
    customPosition: null,
    zIndex: 1,
    rotate: 360,
  };
  const mouseInnerOptions: MouseSettings = {
    scale: 33,
    rotate: -360,
  };
  return (
    <>
      <div className="font-sono min-h-[80vh] flex flex-col justify-center items-center xl:min-h-fit">
        <UpdateFollower
          className="flex flex-col justify-center -mt-24 xl:hidden"
          mouseOptions={mouseOuterOptions}
        >
          <div className="main-cont flex flex-col gap-4 cursor-pointer bg-transparent py-40 items-center">
            <motion.p
              initial={{ y: -300 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.3 }}
              className="main-hi text-2xl font-semibold sm:text-xl"
            >
              Hi, my name is
            </motion.p>
            <UpdateFollower mouseOptions={mouseInnerOptions}>
              <motion.h1
                className="main-title text-8xl font-bold sm:text-7xl text-center"
                initial={{ scale: 0.3 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span>Adnan</span> <span>Shabbir</span>{" "}
                <span>
                  Husain<span className="sm:hidden">.</span>
                </span>
              </motion.h1>
            </UpdateFollower>
          </div>
        </UpdateFollower>
        <div className="hidden xl:flex font-sono">
          <div className="flex gap-14 justify-center items-center lg:flex-col">
            <div className="w-[320px] h-[320px] rounded-full flex justify-center items-center overflow-hidden sm:w-[240px] sm:h-[240px]">
              <BgVideo />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-semibold">Hi, my name is</p>
              <p className="text-4xl font-bold underline">Adnan Shabbir Husain</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[32px] pb-[300px] font-normal flex flex-col gap-1 items-center lg:hidden xl:pt-[60px]">
        <p>A skilled software developer, having a copious amount of</p>
        <p>experience in creating robust digital solutions.</p>
        <p>With professionalism, loves to bring ideas to life.</p>
      </div>
      <div className="hidden text-center pt-[60px] pb-40 font-normal lg:flex items-center text-2xl sm:text-left">
        <p>
          A skilled software developer, having a copious amount of experience in creating robust
          digital solutions. With professionalism, loves to bring ideas to life.
        </p>
      </div>
    </>
  );
}
