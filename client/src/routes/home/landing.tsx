import { useContext } from "react";
import { MouseContext } from "../../context/mousepos/mouse.context";
import BgVideo from "./hovervideo";

export default function LandingPage() {
  const { options, setOptions } = useContext(MouseContext);
  const handleMouseEnterOuter = () => {
    setOptions({
      ...options,
      bgColor: "white",
      mixBlendMode: "difference",
      scale: 15,
      bg: <BgVideo />,
      customPosition: null,
      zIndex: 1,
    });
  };
  const handleMouseLeaveOuter = () => {
    setOptions({
      ...options,
      bgColor: null,
      mixBlendMode: null,
      scale: null,
      rotate: null,
      bg: null,
      zIndex: null,
    });
  };
  const handleMouseEnterInner = () => {
    setOptions({
      ...options,
      scale: 33,
      rotate: 360,
      bg: <BgVideo />,
    });
  };
  const handleMouseLeaveInner = () => {
    setOptions({
      ...options,
      scale: 15,
      rotate: -360,
      bg: <BgVideo />,
    });
  };
  return (
    <>
      <div className="font-sono min-h-[80vh] flex flex-col justify-center items-center">
        <div
          className="flex flex-col justify-center -mt-24"
          onMouseEnter={handleMouseEnterOuter}
          onMouseLeave={handleMouseLeaveOuter}
        >
          <div className="main-cont flex flex-col gap-4 cursor-pointer bg-transparent py-40 items-center">
            <p className="main-hi text-2xl font-semibold sm:text-xl">Hi, my name is</p>
            <p
              className="main-title text-8xl font-bold sm:text-7xl text-center"
              onMouseEnter={handleMouseEnterInner}
              onMouseLeave={handleMouseLeaveInner}
            >
              <span>Adnan</span> <span>Shabbir</span>{" "}
              <span>
                Husain<span className="sm:hidden">.</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-[32px] pb-[300px] font-normal flex flex-col gap-1 items-center sm:text-3xl sm:pb-40 sm:text-center">
        <p>A skilled software developer, having a copious amount of</p>
        <p>experience in creating robust digital solutions.</p>
        <p>With professionalism, loves to bring ideas to life.</p>
      </div>
    </>
  );
}
