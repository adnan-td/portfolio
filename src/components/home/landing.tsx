"use client";

import BgVideo from "@/components/home/hovervideo";
import { motion } from "motion/react";
import Image from "next/image";

export interface Pill {
  _id: string;
  text: string;
  bgColor: string;
  order: number;
}

export default function LandingPage({ pills }: { pills: Array<Pill> }) {
  return (
    <>
      <div className="font-sono min-h-[100vh] flex flex-col justify-start items-center xl:min-h-fit">
        <div className="grid grid-cols-[3fr_2fr] w-screen pr-[10vw] pl-[10vw] mt-10 justify-between items-center xl:hidden">
          <div className="w-full relative overflow-hidden">
            <Image src="/desktop.png" alt="Desktop" className="w-full h-auto object-contain" width={1000} height={300}/>
            <div className="flex items-center justify-center absolute top-[18.5%] left-[27%] w-[50%] h-[35%] overflow-hidden">
              <video
                src="/main_bg.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover pointer-events-none"
              />
            </div>
            <Image src="/character.png" alt="Desktop" className="absolute w-[58%] top-[5%] h-auto object-contain character-rock" width={1000} height={300}/>
          </div>
          <div className="main-cont flex flex-col items-end gap-4 cursor-pointer bg-transparent py-40">
            <motion.p
              initial={{ y: -300 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.3 }}
              className="main-hi text-3xl font-semibold sm:text-xl"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              className="main-title text-6xl font-bold sm:text-7xl text-center"
              initial={{ scale: 0.3 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span>Adnan</span> {" "}
              <span>
                Husain
              </span>
            </motion.h1>
            <div className="flex flex-wrap justify-end gap-3 mt-5">
              {pills.map((pill) => (
                <div
                  key={pill._id}
                  className="px-4 py-2 rounded-full font-medium text-sm text-white transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 ease-in-out"
                  style={{ backgroundColor: pill.bgColor }}
                >
                  {pill.text}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden xl:flex font-sono mt-10">
          <div className="flex gap-14 justify-center items-center lg:flex-col">
            <div className="max-w-[90vw] relative overflow-hidden">
            <Image src="/desktop.png" alt="Desktop" className="w-full h-auto object-contain" width={1000} height={300}/>
            <div className="flex items-center justify-center absolute top-[18.5%] left-[27%] w-[50%] h-[35%] overflow-hidden">
              <video
                src="/main_bg.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover pointer-events-none"
              />
            </div>
            <Image src="/character.png" alt="Desktop" className="absolute w-[58%] top-[5%] h-auto object-contain character-rock" width={1000} height={300}/>
          </div>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-semibold">Hi, my name is</p>
              <p className="text-4xl font-bold underline">Adnan Husain</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[32px] pb-[300px] font-normal flex flex-col gap-1 items-center lg:hidden xl:pt-[60px]">
        <p>I am a skilled software engineer, with copious amounts of</p>
        <p>experience in creation of digital solutions.</p>
        <p>With professionalism, I love to bring ideas to life.</p>
      </div>
      <div className="hidden text-center pt-[60px] pb-40 font-normal lg:flex items-center text-2xl sm:text-left">
        <p>
          I am a skilled software engineer, with copious amounts of experience in
          creation of digital solutions. With professionalism, I love to bring ideas to life.
        </p>
      </div>
    </>
  );
}
