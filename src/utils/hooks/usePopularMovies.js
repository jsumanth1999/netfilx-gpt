import { useEffect } from "react";
import { options } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const moviesPopular = useSelector(store => store.movies.popularMovies)

  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !moviesPopular && popularMovies();
  }, []);
};

export default usePopularMovies;
