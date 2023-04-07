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
      className="relative left-0 top-0 h-screen bg-black text-white flex flex-col justify-center items-center gap-10 pt-10 overflow-hidden"
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div style={{ y }} className="w-full flex justify-center items-center relative">
        <section className="footer">
          <div className="footer-content">
            <div className="footer-body">
              <div className="footer-container">
                <div className="footer-header">
                  <h2>Have an idea?</h2>
                  <a href="/contacts/">Tell us about it</a>
                </div>
              </div>
            </div>
            <div className="footer-footer">
              <div className="footer-container">
                <div className="footer-grid">
                  <div className="footer-grid-col -left">
                    <div className="footer-mail">
                      <a href="mailto:adnan.s.husain.1@gmail.com">
                        <em>
                          <span>adnan.s.husain.1@gmail.com</span>
                        </em>
                      </a>
                    </div>
                    <div className="footer-address">
                      <address>
                        <p>Shantinagar, Nagpur-440002</p>
                        <p>Maharashtra, India</p>
                      </address>
                    </div>
                    <div className="footer-link">
                      <p className="w-full">Copyright &#169; 2023-24</p>
                    </div>
                  </div>
                  <div id="footerSocials" className="grid grid-cols-2 gap-5 m-8 ml-14">
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
            </div>
          </div>
        </section>
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
      className="p-2 flex justify-center items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className="md:hidden text-xl cursor-pointer font-semibold"
      >
        {content}
      </a>
      <div className="md:block hidden">{icon}</div>
    </div>
  );
}
