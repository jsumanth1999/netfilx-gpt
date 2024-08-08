import { useEffect } from "react";
import { options } from "../constants"
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../moviesSlice";


const useTrendingMovies = () => {

    const dispatch = useDispatch();
    const trending = useSelector(store => store.movies.trendingMovies);

    const trendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    }

    useEffect(() => {
        !trending && trendingMovies();
    },[])

}

export default useTrendingMovies;

