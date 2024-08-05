import { useEffect } from "react";
import { options } from "../constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const json = await data.json();
    console.log(json);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    popularMovies();
  }, []);
};

export default usePopularMovies;
