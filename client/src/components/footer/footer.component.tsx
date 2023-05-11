import { useScroll, useTransform, motion, MotionValue, useMotionValueEvent } from "framer-motion";
import { useContext, useRef } from "react";
import { MouseContext } from "../../context/mousepos/mouse.context";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./footer.style.scss";

export default function FooterComponent() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const { options, setOptions } = useContext(MouseContext);

  const handleMouseEnter = () => {
    setOptions({
      ...options,
      bgColor: "white",
      zIndex: 1,
      customPosition: null,
      scale: null,
      invert: true,
      bg: null,
    });
  };

  const handleMouseLeave = () => {
    setOptions({
      ...options,
      bgColor: null,
      zIndex: null,
      invert: false,
    });
  };

  const y = useParallax(scrollYProgress, [-500, 0]);
  return (
    <div
      className="relative left-0 top-0 min-h-screen bg-black text-white flex flex-col justify-center items-center gap-10 pt-10 overflow-hidden"
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div style={{ y }} className="w-full flex justify-center items-center relative">
        <div
          id="footer"
          className="w-full flex flex-col gap-20 justify-center items-center md:gap-5"
        >
          <div id="footer-top" className="">
            <div className="footer-header">
              <h2>Have an idea?</h2>
              <a href="/contact">Share it with me</a>
            </div>
          </div>
          <div id="footer-bottom" className="flex gap-7 justify-center items-center lg:flex-col">
            <div className="flex flex-col justify-center items-start lg:items-center">
              <div className="footer-mail">
                <a href="mailto:adnan.s.husain.1@gmail.com">
                  <em>
                    <span style={{ fontStyle: "normal" }}>adnan.s.husain@gmail.com</span>
                  </em>
                </a>
              </div>
              <div className="footer-address text-zinc-500 font-semibold text-base">
                <address>
                  <p className="lg:text-center">Shantinagar, Nagpur-440002</p>
                  <p className="lg:text-center">Maharashtra, India</p>
                </address>
              </div>
              <div className="footer-link mt-3 mb-6">
                <p className="w-full">Copyright &#169; 2023-24</p>
              </div>
            </div>
            <div id="footerSocials" className="grid grid-cols-2 gap-5">
              <SocialLink
                href="https://www.linkedin.com/in/adnan-shabbir-husain/"
                content="LinkedIn"
                icon={<LinkedInIcon />}
              />
              <SocialLink
                href="https://github.com/Adnan-S-Husain"
                content="GitHub"
                icon={<GitHubIcon />}
              />
              <SocialLink
                href="https://www.instagram.com/adnan_td0/"
                content="Instagram"
                icon={<InstagramIcon />}
              />
              <SocialLink
                href="https://twitter.com/adnan_td"
                content="Twitter"
                icon={<TwitterIcon />}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function useParallax(value: MotionValue<number>, distance: [string | number, string | number]) {
  return useTransform(value, [0, 1], distance);
}

function SocialLink({ href, content, icon }: { href: string; content: string; icon: JSX.Element }) {
  const { options, setOptions } = useContext(MouseContext);
  const handleMouseEnter = () => {
    setOptions({ ...options, scale: 5, bgColor: "white", mixBlendMode: "difference", zIndex: 2 });
  };
  const handleMouseLeave = () => {
    setOptions({ ...options, scale: null, bgColor: "white", mixBlendMode: null, zIndex: 1 });
  };
  return (
    <div
      className="py-2 flex justify-center items-center px-8 lg:py-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className="lg:hidden text-xl cursor-pointer font-semibold"
      >
        {content}
      </a>
      <a href={href} rel="noreferrer" target="_blank" className="lg:block hidden text-zinc-600">
        {icon}
      </a>
    </div>
  );
}
