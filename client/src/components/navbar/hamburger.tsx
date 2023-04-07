import "./hamburger.scss";
import { useEffect, useRef, useContext } from "react";
import { MouseContext } from "../../context/mousepos/mouse.context";

export default function Hamburger({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const containerRef = useRef(null);
  const { options, setOptions } = useContext(MouseContext);

  const handleMouseEnter = () => {
    const cur = containerRef.current;
    setOptions({
      ...options,
      scale: 5,
      customPosition: {
        x: cur?.offsetLeft + cur?.scrollWidth / 2.5 + 3,
        y: cur?.offsetHeight - cur?.scrollHeight / 2.5 + 9,
      },
      zIndex: 3,
      bgColor: options.invert ? "white" : null,
    });
  };

  const handleMouseLeave = () => {
    setOptions({
      ...options,
      customPosition: null,
      bgColor: null,
      scale: null,
      zIndex: !isOpen ? null : 3,
    });
  };

  useEffect(() => {
    if (isOpen) {
      setOptions({ ...options, zIndex: 3, invert: false });
    }
  }, [isOpen]);

  return (
    <div
      className={options?.invert ? "menu cross menu--2_invert" : "menu cross menu--2"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
  );
}
