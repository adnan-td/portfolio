import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import Hamburger from "./hamburger";
import ArticleIcon from "@mui/icons-material/Article";
import { MouseContext } from "../../context/mousepos/mouse.context";
import { Link } from "react-router-dom";

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
      scale: 4,
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

  const whileHover = { scale: 0.97 };

  return (
    <div className="flex justify-between pl-14 py-6 items-center min-h-20 gap-3 sm:pl-7">
      <Link to="/">
        <button className="cursor-pointer">
          <img className="w-20 text-black sm:w-14" src="/Logo.svg" alt="Logo" />
        </button>
      </Link>
      <div className="flex items-center justify-center">
        <div className="flex gap-12 items-center font-sono font-medium text-xl sm:gap-0">
          <a
            href="https://drive.google.com/file/d/1Io1UJSCp8j1mHFWAa0wknBYzdr3CIwlC/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 sm:hidden"
          >
            <ArticleIcon /> resume
          </a>
          <button style={{ cursor: "default" }}>menu</button>
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
                className="bg-white p-6 pt-32 grid grid-cols-2 gap-10 fixed right-0 top-0 min-h-screen align-top opacity-100 z-[2] overflow-auto sm:w-screen sm:px-[15%] sm:grid-cols-1"
              >
                <div id="nav-grid-left" className="flex flex-col gap-40 px-20 z-[3] sm:px-0">
                  <div
                    id="socials"
                    className="flex flex-col gap-3 font-semibold text-base sm:hidden"
                  >
                    <p className="font-base mb-5 text-neutral-400">Social</p>
                    <motion.a
                      href="https://www.linkedin.com/in/adnan-shabbir-husain/"
                      whileHover={whileHover}
                      onHoverStart={handleMouseEnterSocials}
                      onHoverEnd={handleMouseLeaveSocials}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </motion.a>
                    <motion.a
                      href="https://github.com/Adnan-S-Husain"
                      whileHover={whileHover}
                      onHoverStart={handleMouseEnterSocials}
                      onHoverEnd={handleMouseLeaveSocials}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/adnan_td0/"
                      whileHover={whileHover}
                      onHoverStart={handleMouseEnterSocials}
                      onHoverEnd={handleMouseLeaveSocials}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </motion.a>
                    <motion.a
                      href="https://twitter.com/adnan_td"
                      whileHover={whileHover}
                      onHoverStart={handleMouseEnterSocials}
                      onHoverEnd={handleMouseLeaveSocials}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                    </motion.a>
                  </div>
                  <div
                    id="getintouch"
                    className="flex flex-col gap-3 font-semibold text-base min-w-[200px]"
                  >
                    <p className="font-base mb-3 text-neutral-400">Get in touch</p>
                    <a className="underline" href="mailto:adnan.s.husain.1@gmail.com">
                      adnan.s.husain@gmail.com
                    </a>
                  </div>
                </div>
                <div
                  id="nav-grid-right"
                  className="flex flex-col gap-5 font-semibold text-[40px] z-[3] sm:text-3xl sm:row-start-1"
                >
                  <p className="font-base mb-5 text-neutral-400 text-base">Menu</p>
                  <Link to="/">
                    <motion.button
                      whileHover={whileHover}
                      onHoverStart={handleMouseEnterLinks}
                      onHoverEnd={handleMouseLeaveLinks}
                    >
                      Home
                    </motion.button>
                  </Link>
                  <Link to="/about">
                    <motion.button
                      whileHover={whileHover}
                      onHoverStart={handleMouseEnterLinks}
                      onHoverEnd={handleMouseLeaveLinks}
                    >
                      About
                    </motion.button>
                  </Link>
                  <Link to="/projects">
                    <motion.button
                      whileHover={whileHover}
                      onHoverStart={handleMouseEnterLinks}
                      onHoverEnd={handleMouseLeaveLinks}
                    >
                      Projects
                    </motion.button>
                  </Link>

                  <Link to="/blogs">
                    <motion.button
                      whileHover={whileHover}
                      onHoverStart={handleMouseEnterLinks}
                      onHoverEnd={handleMouseLeaveLinks}
                    >
                      Blogs
                    </motion.button>
                  </Link>
                  <Link to="/contact">
                    <motion.button
                      whileHover={whileHover}
                      onHoverStart={handleMouseEnterLinks}
                      onHoverEnd={handleMouseLeaveLinks}
                    >
                      Contact
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
