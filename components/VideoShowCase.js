import videoStyle from "../styles/video/Video.module.css";
import HomeHeader from "../components/HomeHeader"
const VideoShowCase = () => {
  return (
    <div className={videoStyle.videocontainer} id="section-1">
        <video autoPlay playsInline muted loop>
        <source src="../Taxinet-Intro.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoShowCase;
