import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import Hamburger from "./hamburger";
import ArticleIcon from "@mui/icons-material/Article";
import { MouseContext } from "../../context/mousepos/mouse.context";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { options, setOptions } = useContext(MouseContext);

  const handleMouseEnterLinks = () => {
    setOptions({
      ...options,
      scale: 6,
      bgColor: "white",
      mixBlendMode: "difference",
    });
  };
  const handleMouseLeaveLinks = () => {
    setOptions({
      ...options,
      scale: null,
      bgColor: null,
      mixBlendMode: null,
    });
  };
  const handleMouseEnterSocials = () => {
    setOptions({
      ...options,
      scale: 3,
      bgColor: "white",
      mixBlendMode: "difference",
    });
  };
  const handleMouseLeaveSocials = () => {
    setOptions({
      ...options,
      scale: null,
      bgColor: null,
      mixBlendMode: null,
    });
  };

  const variantsNavbarGrid = {
    hidden: {
      opacity: 0,
      x: 1000,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  const whileHover = { scale: 1.2, x: 5 };

  return (
    <div className="flex justify-between pl-14 py-6 items-center min-h-20 gap-3">
      <a href="/" className="cursor-pointer">
        <img className="w-20 text-black sm:w-14" src="/Logo.svg" alt="Logo" />
      </a>
      <div className="flex items-center justify-center">
        <div className="flex gap-12 items-center font-sono font-medium text-xl sm:gap-7">
          <a href="#" className="flex items-center gap-1 sm:hidden">
            <ArticleIcon /> resume
          </a>
          <a href="#" className="">
            menu
          </a>
          <div className="h-[60px] w-[70px] sm:w-[80px]"></div>
        </div>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        <AnimatePresence mode="wait">
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                key="navbar-bg"
                className="bg-black fixed top-0 left-0 min-h-screen min-w-full overflow-auto z-[2]"
              ></motion.div>
              <motion.div
                key="navbar-grid"
                variants={variantsNavbarGrid}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{
                  type: "just",
                  delay: 0.2,
                }}
                className="bg-white p-6 pt-32 grid grid-cols-2 gap-10 fixed right-0 top-0 min-h-screen align-top opacity-100 z-[2] overflow-auto"
              >
                <div id="nav-grid-left" className="flex flex-col gap-24 px-20 z-[3]">
                  <div id="socials" className="flex flex-col gap-3 font-semibold text-sm">
                    <p className="font-base mb-5 text-neutral-400">Social</p>
                    <motion.a
                      href="#"
                      whileHover={whileHover}
                      onHoverStart={handleMouseEnterSocials}
                      onHoverEnd={handleMouseLeaveSocials}
                    >
                      LinkedIn
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={whileHover}
                      onHoverStart={handleMouseEnterSocials}
                      onHoverEnd={handleMouseLeaveSocials}
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={whileHover}
                      onHoverStart={handleMouseEnterSocials}
                      onHoverEnd={handleMouseLeaveSocials}
                    >
                      Instagram
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={whileHover}
                      onHoverStart={handleMouseEnterSocials}
                      onHoverEnd={handleMouseLeaveSocials}
                    >
                      Twitter
                    </motion.a>
                  </div>
                  <div id="getintouch" className="flex flex-col gap-3 font-semibold text-sm">
                    <p className="font-base mb-3 text-neutral-400">Get in touch</p>
                    <p className="underline">adnan.s.husain</p>
                  </div>
                </div>
                <div
                  id="nav-grid-right"
                  className="flex flex-col gap-6 font-semibold text-3xl z-[3]"
                >
                  <p className="font-base mb-5 text-neutral-400 text-sm">Menu</p>
                  <motion.a
                    href="#"
                    whileHover={whileHover}
                    onHoverStart={handleMouseEnterLinks}
                    onHoverEnd={handleMouseLeaveLinks}
                  >
                    About
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={whileHover}
                    onHoverStart={handleMouseEnterLinks}
                    onHoverEnd={handleMouseLeaveLinks}
                  >
                    Projects
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={whileHover}
                    onHoverStart={handleMouseEnterLinks}
                    onHoverEnd={handleMouseLeaveLinks}
                  >
                    Blogs
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={whileHover}
                    onHoverStart={handleMouseEnterLinks}
                    onHoverEnd={handleMouseLeaveLinks}
                  >
                    Contacts
                  </motion.a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
