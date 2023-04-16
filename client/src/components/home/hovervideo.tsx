import mainVideo from "../../assets/main-video.mp4";

export default function BgVideo() {
  return (
    <div className="h-full overflow-hidden flex justify-center items-center">
      <video playsInline={true} autoPlay={true} muted={true} loop={true} src={mainVideo} />
    </div>
  );
}
