"use client";

import { AnimatePresence, motion } from "motion/react";
import { useContext, useEffect, useState } from "react";
import Hamburger from "./hamburger";
import { MdArticle as ArticleIcon } from "react-icons/md";
import Link from "next/link";
import { NavStatusContext } from "../../context/navstatus/navstatus.context";
import Image from "next/image";
import { client } from "../../../lib/sanity.client";
import { BsLinkedin, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

export default function NavbarComponent() {
  const { isOpen, setIsOpen } = useContext(NavStatusContext);
  const [navSocials, setNavSocials] = useState<Array<any>>([]);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [contactEmail, setContactEmail] = useState<string | null>(null);

  useEffect(() => {
    // fetch socials and resume from Sanity
    const fetchData = async () => {
      try {
        const socials = await client.fetch(`*[_type == "social"] | order(title asc)`);
        setNavSocials(socials || []);
        const resume = await client.fetch(`*[_type == "resume"][0]{"url": resumeFile.asset->url}`);
        if (resume && resume.url) setResumeUrl(resume.url);
        console.log("Fetched resume URL:", resume.url);
        const cfg = await client.fetch(`*[_type == "siteConfig"][0]{contactMailTo}`);
        if (cfg && cfg.contactMailTo) setContactEmail(cfg.contactMailTo);
      } catch (e) {
        // ignore fetch errors and keep defaults
        console.error("Sanity fetch error (navbar):", e);
      }
    };
    fetchData();
  }, []);

  const closeNavbar = () => {
    setIsOpen(false);
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
    exit: {
      opacity: 0,
      x: 1000,
      transition: {
        delay: 0,
      },
    },
  };

  const whileHover = { scale: 0.97 };

  return (
    <div className="flex justify-between pl-14 py-6 items-center min-h-20 gap-3 sm:pl-7">
      <Link href="/">
        <button className="cursor-pointer">
          <Image
            height="1980"
            width="1980"
            className="w-20 text-black sm:w-14"
            src="/Logo.svg"
            alt="Logo"
          />
        </button>
      </Link>
      <div className="flex items-center justify-center">
        <div className="flex gap-12 items-center font-sono font-medium text-xl sm:gap-0">
          {/* resume link (uses Sanity-managed resume) */}
          {resumeUrl ? (
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 sm:hidden">
              <ArticleIcon /> resume
            </a>
          ) : null}
          <button style={{ cursor: "default" }}>menu</button>
          <div className="h-[60px] w-[70px] sm:w-[80px]"></div>
        </div>
        <Hamburger />
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
                exit="exit"
                transition={{
                  type: "tween",
                  delay: 0.2,
                }}
                className="bg-white p-6 pt-32 grid grid-cols-2 gap-10 fixed right-0 top-0 min-h-screen align-top opacity-100 z-[2] overflow-auto sm:w-screen sm:px-[15%] sm:grid-cols-1"
              >
                <div id="nav-grid-left" className="flex flex-col gap-40 px-20 z-[3] sm:px-0">
                  <div id="socials" className="flex flex-col gap-3 font-semibold text-base sm:hidden">
                    <p className="font-base mb-5 text-neutral-400">Socials</p>
                    {navSocials.map((s) => (
                      <NavSocialsComponent key={s._id} text={s.title} href={s.url} whileHover={whileHover} />
                    ))}
                  </div>
                  <div
                    id="getintouch"
                    className="flex flex-col gap-3 font-semibold text-base min-w-[200px]"
                  >
                    <p className="font-base mb-3 text-neutral-400">Get in touch</p>
                    <a className="underline" href={`mailto:${contactEmail ?? "adnan.s.husain.1@gmail.com"}`}>
                      {contactEmail ?? "adnan.s.husain.1@gmail.com"}
                    </a>
                  </div>
                </div>
                <div
                  id="nav-grid-right"
                  className="flex flex-col gap-5 font-semibold text-[40px] z-[3] sm:text-3xl sm:row-start-1"
                >
                  <p className="font-base mb-5 text-neutral-400 text-base">Menu</p>
                  <NavLinksComponent
                    to="/"
                    text="Home"
                    handleClick={closeNavbar}
                    whileHover={whileHover}
                  />
                  <NavLinksComponent
                    to="/projects"
                    text="Projects"
                    handleClick={closeNavbar}
                    whileHover={whileHover}
                  />
                  {/*
                  <NavLinksComponent
                    to="https://devpiece.adnan-husain.com"
                    target="_blank"
                    text="Blog"
                    handleClick={closeNavbar}
                    whileHover={whileHover}
                  />
                  */}
                  <NavLinksComponent
                    to="/contact"
                    text="Contact"
                    handleClick={closeNavbar}
                    whileHover={whileHover}
                  />
                </div>

                <div id="socials" className="hidden flex-col gap-3 font-semibold text-base sm:flex">
                  <p className="font-base mb-5 text-neutral-400">Socials</p>
                  <div id="navSocials" className="hidden gap-8 sm:flex">
                    {navSocials.length > 0 ? (
                      navSocials.map((s: any) => (
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
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function NavLinksComponent({
  whileHover,
  to,
  text,
  target,
  handleClick,
}: {
  whileHover: any;
  to: string;
  text: string;
  target?: string;
  handleClick: () => void;
}) {
  return (
    <Link onClick={handleClick} target={target} href={to}>
      <motion.button whileHover={whileHover}>{text}</motion.button>
    </Link>
  );
}

function NavSocialsComponent({
  whileHover,
  text,
  href,
}: {
  whileHover: any;
  text: string;
  href: string;
}) {
  return (
    <div>
      <motion.a href={href} whileHover={whileHover} target="_blank" rel="noreferrer">
        {text}
      </motion.a>
    </div>
  );
}

function SocialLink({ href, content, icon }: { href: string; content: string; icon: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center">
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
