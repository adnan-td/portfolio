"use client";

import "./hamburger.scss";
import { useEffect, useRef, useState, useContext } from "react";
import { UpdateFollower } from "react-mouse-follower";
import { NavStatusContext } from "../../context/navstatus/navstatus.context";
import { WidthContext } from "../../context/screenwidth/screenwidth.context";

export default function Hamburger() {
  const containerRef = useRef(null);
  const { isInverted, isOpen, setIsOpen } = useContext(NavStatusContext);
  const { screenwidth } = useContext(WidthContext);
  return (
    <UpdateFollower
      className="menu_container"
      mouseOptions={{
        zIndex: 3,
        scale: 5,
        backgroundColor: isInverted && !isOpen ? "white" : "black",
        customPosition: containerRef,
      }}
    >
      <div
        className={isInverted && !isOpen ? "menu cross menu--2_invert" : "menu cross menu--2"}
        ref={containerRef}
      >
        <label>
          <input
            type="checkbox"
            checked={isOpen}
            onChange={() => {
              setIsOpen(!isOpen);
            }}
          />
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path className="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
            <path className="line--2" d="M0 50h99" />
            <path className="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
          </svg>
        </label>
      </div>
    </UpdateFollower>
  );
}
