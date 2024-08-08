import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../constants";
import { addTrailer } from "../moviesSlice";

const useTrailerPlaying = (movieId) => {
  const disptach = useDispatch();
  const trailer = useSelector(store => store.movies.trailerPlaying)

  useEffect(() => {
    !trailer && videoPlaying();
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
