import { useDispatch } from "react-redux";
import { options } from "../constants";
import { addMoviesNowPlaying } from "../moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();

  const moviesNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      options
    );
    const json = await data.json();
    dispatch(addMoviesNowPlaying(json.results));
  };

  useEffect(() => {
    moviesNowPlaying();
  }, []);

};

export default useNowPlayingMovie;
