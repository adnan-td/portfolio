"use client";

import "./hamburger.scss";
import { useContext, useRef } from "react";
import { NavStatusContext } from "../../context/navstatus/navstatus.context";

export default function Hamburger() {
  const containerRef = useRef(null);
  const { isInverted, isOpen, setIsOpen } = useContext(NavStatusContext);

  return (
    <div className="menu_container">
      <div
        className={isInverted ? "menu cross menu--2_invert" : "menu cross menu--2"}
        ref={containerRef}
      >
        <label>
          <input
            type="checkbox"
            checked={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onChange={() => {
              setIsOpen(!isOpen);
            }}
          />
          <svg
            className="menu_icon"
            width="56"
            height="56"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path className="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
            <path className="line--2" d="M0 50h99" />
            <path className="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
          </svg>
        </label>
      </div>
    </div>
  );
}
