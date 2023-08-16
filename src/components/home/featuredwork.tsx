"use client";

import { useContext, useState } from "react";
import { WidthContext } from "../../context/screenwidth/screenwidth.context";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function FeaturedWorks({ data }: { data: any }) {
  return (
    <div className="w-full flex flex-col justify-center items-center md:gap-6">
      {data &&
        data.slice(0, 4).map((fw: any, i: number) => {
          return (
            <FeaturedWork
              key={i}
              isInverted={i % 2 != 0}
              data={{
                title: fw.title,
                description: fw.description,
                tech: fw.tech,
                image: fw.image,
                bgColor: fw.bgColor,
                mouseColor: fw.mouseColor,
                url: fw.url,
              }}
            />
          );
        })}
    </div>
  );
}

interface WorkInterface {
  title: string;
  description: string;
  tech: string;
  image: string;
  bgColor: string;
  mouseColor: string;
  url: string;
}

function FeaturedWork({ data, isInverted }: { data: WorkInterface; isInverted: boolean }) {
  const navigate = useRouter();
  const [isHoverImg, setIsHoverImage] = useState(false);
  const { screenwidth } = useContext(WidthContext);

  function handleDivClick() {
    if (screenwidth < 768) {
      navigate.push(data.url);
    }
  }

  function handleImageClick() {
    navigate.push(data.url);
  }

  const slideAmount = () => {
    if (isInverted) {
      return 200;
    } else {
      return -200;
    }
  };
  const imageContClass =
    "max-w-[600px] shadow-md w-full aspect-[16/12] overflow-hidden rounded-lg cursor-pointer relative flex justify-center items-center";
  return (
    <UpdateFollower
      mouseOptions={
        screenwidth > 768
          ? {
              backgroundColor: data.mouseColor,
            }
          : {
              backgroundColor: data.mouseColor,
              zIndex: 3,
              scale: 5,
              backgroundElement: <FWHover color={data.mouseColor} />,
            }
      }
    >
      <motion.div
        className="relative grid grid-cols-2 items-center w-full gap-8 p-5 py-10 md:flex overflow-hidden"
        onClick={handleDivClick}
        initial={{ opacity: 0, scale: 0.4, x: slideAmount() }}
        whileInView={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <div
          className="relative w-full flex justify-end md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 md:justify-center"
          style={{
            order: isInverted && screenwidth > 768 ? "2" : null,
            justifyContent: isInverted && screenwidth > 768 ? "flex-start" : null,
          }}
        >
          <UpdateFollower
            className={
              isHoverImg && screenwidth > 768
                ? `${imageContClass} grayscale-[10%] md:grayscale-0`
                : imageContClass
            }
            mouseOptions={
              screenwidth > 768
                ? {
                    scale: 5,
                    zIndex: 3,
                    backgroundElement: <FWHover color={data.mouseColor} />,
                    backgroundColor: data.mouseColor,
                  }
                : {}
            }
          >
            <Image
              onClick={handleImageClick}
              src={data.image}
              alt={data.title}
              className="w-full hover:scale-[1.02] transition-transform md:hover:scale-100 md:h-full md:w-auto md:max-w-none duration-[1s]"
              width="1980"
              height="1980"
            />
            {screenwidth < 768 && (
              <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black bg-opacity-80"></div>
            )}
          </UpdateFollower>
        </div>
        <div
          className="w-full flex justify-start h-full md:justify-center"
          style={{
            justifyContent: isInverted && screenwidth > 768 ? "flex-end" : null,
          }}
        >
          <div
            className="relative z-[1] flex justify-center flex-col items-start w-full max-w-[600px] gap-4 cursor-pointer md:px-5 md:text-white md:py-10 md:aspect-[16/10]"
            style={{
              textAlign: isInverted && screenwidth > 768 ? "right" : null,
            }}
          >
            <p className="text-2xl font-medium w-full">{data.title}</p>
            <p className="text-4xl font-semibold md:text-3xl w-full">{data.description}</p>
            <p className="text-1xl text-[#6f6f6f] font-medium w-full">{data.tech}</p>
          </div>
        </div>
      </motion.div>
    </UpdateFollower>
  );
}

function FWHover({ color }: { color: string }) {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-full text-white font-normal bg-opacity-60 font-[arial] bg-white"
      style={{
        backgroundColor: color,
        fontSize: "0.2rem",
        fontFamily: "san",
        fontWeight: "600",
        lineHeight: "3px",
      }}
    >
      <p>view</p>
      <p>case</p>
    </div>
  );
}
