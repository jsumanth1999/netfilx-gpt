import { useEffect } from "react";
import { options } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const ratedMovies = useSelector(store => store.movies.topRatedMovies)

  const topRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
   !ratedMovies && topRatedMovies();
  }, []);
};

export default useTopRatedMovies;
