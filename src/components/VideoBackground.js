import { useSelector } from "react-redux";
import useTrailerPlaying from "../utils/hooks/useTrailerPlaying";

const VideoBackground = ({ movieId }) => {
  const trailerdata = useSelector((store) => store.movies?.trailerPlaying);

  useTrailerPlaying(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerdata?.key + "?&autoplay=1&mute=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
