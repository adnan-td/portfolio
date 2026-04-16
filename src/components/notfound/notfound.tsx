"use client";

import Lottie from "react-lottie";
import animationJson from "../../json/notfound.json";

export default function NotFoundComponent() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: "3000",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "500px",
            width: "100%",
            height: "min(500px, 60vh)",
          }}
        >
          <Lottie options={{ loop: true, autoplay: true, animationData: animationJson }} />
        </div>
      </div>
    </div>
  );
}
