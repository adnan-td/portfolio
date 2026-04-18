"use client";

import { useScroll, useTransform, motion, MotionValue, useMotionValueEvent } from "motion/react";
import { useRef, useContext, useEffect, useState } from "react";
import { BsLinkedin, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { client } from "../../../lib/sanity.client";

import { NavStatusContext } from "../../context/navstatus/navstatus.context";

import "./footer.scss";

export default function FooterComponent() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const { setIsInverted } = useContext(NavStatusContext);
  const y = useParallax(scrollYProgress, [-500, 0]);
  const [socials, setSocials] = useState<Array<any>>([]);
  const [contactEmail, setContactEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const s = await client.fetch(`*[_type == "social"] | order(title asc)`);
        setSocials(s || []);
        const cfg = await client.fetch(`*[_type == "siteConfig"][0]{contactMailTo}`);
        if (cfg && cfg.contactMailTo) setContactEmail(cfg.contactMailTo);
      } catch (e) {
        console.error("Sanity fetch error (footer):", e);
      }
    };
    fetchData();
  }, []);
  return (
    <motion.div
      className="relative left-0 top-0 min-h-screen bg-black text-white flex flex-col justify-center items-center gap-10 pt-10 overflow-hidden"
      ref={ref}
      onViewportEnter={() => {
        setIsInverted(true);
      }}
      onViewportLeave={() => {
        setIsInverted(false);
      }}
    >
      <motion.div style={{ y }} className="w-full flex justify-center items-center relative">
        <div id="footer" className="w-full flex flex-col gap-20 justify-center items-center md:gap-5">
          <div id="footer-top" className="">
            <div className="footer-header">
              <h2>Have an idea?</h2>
              <a href="/contact">Share it with me</a>
            </div>
          </div>
          <div id="footer-bottom" className="flex gap-7 justify-center items-center lg:flex-col">
            <div className="flex flex-col justify-center items-start lg:items-center">
              <div className="footer-mail">
                <a href={`mailto:${contactEmail ?? "adnan.s.husain.1@gmail.com"}`}>
                  <em>
                    <span style={{ fontStyle: "normal" }}>{contactEmail ?? "adnan.s.husain.1@gmail.com"}</span>
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
              {socials.length > 0 ? (
                socials.map((s: any) => (
                  <SocialLink key={s._id} href={s.url} content={s.title} icon={getIconForTitle(s.title)} />
                ))
              ) : (
                <>
                  <SocialLink href="https://www.linkedin.com/in/adnan-shabbir-husain/" content="LinkedIn" icon={<BsLinkedin />} />
                  <SocialLink href="https://github.com/Adnan-S-Husain" content="GitHub" icon={<BsGithub />} />
                  <SocialLink href="https://www.instagram.com/adnan_td0/" content="Instagram" icon={<BsInstagram />} />
                  <SocialLink href="https://twitter.com/adnan_td" content="Twitter" icon={<BsTwitter />} />
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function useParallax(value: MotionValue<number>, distance: [string | number, string | number]) {
  return useTransform(value, [0, 1], distance);
}

function SocialLink({ href, content, icon }: { href: string; content: string; icon: React.ReactNode }) {
  return (
    <div className="py-2 flex justify-center items-center px-8 lg:py-1">
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

function getIconForTitle(title: string) {
  const t = title.toLowerCase();
  if (t.includes("linkedin")) return <BsLinkedin />;
  if (t.includes("github")) return <BsGithub />;
  if (t.includes("instagram")) return <BsInstagram />;
  if (t.includes("twitter")) return <BsTwitter />;
  return <BsLinkedin />;
}
