"use client";

export default function BgVideo() {
  return (
    <div className="w-full overflow-hidden flex justify-center items-center">
      <video
        playsInline={true}
        autoPlay={true}
        muted={true}
        loop={true}
        src="/main_bg.mp4"
        width={"100%"}
      />
    </div>
  );
}
