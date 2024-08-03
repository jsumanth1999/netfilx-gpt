import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "./constants";
import { addTrailer } from "./moviesSlice";

const useTrailerPlaying = (movieId) => {
  const disptach = useDispatch();

  useEffect(() => {
    videoPlaying();
  }, []);

  const videoPlaying = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    disptach(addTrailer(trailer));
  };
};

export default useTrailerPlaying;
