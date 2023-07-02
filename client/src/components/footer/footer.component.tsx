import { useScroll, useTransform, motion, MotionValue, useMotionValueEvent } from "framer-motion";
import { useRef, useContext } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { UpdateFollower } from "react-mouse-follower";
import { NavStatusContext } from "../../context/navstatus/navstatus.context";

import "./footer.style.scss";

export default function FooterComponent() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const { setIsInverted } = useContext(NavStatusContext);
  const y = useParallax(scrollYProgress, [-500, 0]);
  return (
    <UpdateFollower
      mouseOptions={{
        backgroundColor: "white",
        zIndex: 1,
      }}
    >
      <motion.div
        className="relative left-0 top-0 min-h-screen bg-black text-white flex flex-col justify-center items-center gap-10 pt-10 overflow-hidden"
        ref={ref}
        onViewportEnter={() => {
          console.log("Viewport entered");
          setIsInverted(true);
        }}
        onViewportLeave={() => {
          console.log("Viewport exited");
          setIsInverted(false);
        }}
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
      </motion.div>
    </UpdateFollower>
  );
}

function useParallax(value: MotionValue<number>, distance: [string | number, string | number]) {
  return useTransform(value, [0, 1], distance);
}

function SocialLink({ href, content, icon }: { href: string; content: string; icon: JSX.Element }) {
  return (
    <UpdateFollower
      className="py-2 flex justify-center items-center px-8 lg:py-1"
      mouseOptions={{
        scale: 5,
        backgroundColor: "white",
        mixBlendMode: "difference",
        zIndex: 2,
      }}
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
    </UpdateFollower>
  );
}
