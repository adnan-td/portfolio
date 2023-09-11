"use client";

import Lottie from "react-lottie";
import animationJson from "../../json/notfound.json";

export default function NotFoundComponent() {
  return (
    <div style={{ position: "fixed", zIndex: "1000", backgroundColor: "white" }}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
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
            height: "100%",
          }}
        >
          <Lottie options={{ loop: true, autoplay: true, animationData: animationJson }} />
        </div>
      </div>
    </div>
  );
}
