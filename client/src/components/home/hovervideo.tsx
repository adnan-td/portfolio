import mainVideo from "../../assets/main_bg.mp4";

export default function BgVideo() {
  return (
    <div className="w-full overflow-hidden flex justify-center items-center">
      <video
        playsInline={true}
        autoPlay={true}
        muted={true}
        loop={true}
        src={mainVideo}
        width={"100%"}
      />
    </div>
  );
}
