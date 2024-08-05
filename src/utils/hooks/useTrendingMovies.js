import { useEffect } from "react";
import { options } from "../constants"
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../moviesSlice";


const useTrendingMovies = () => {

    const dispatch = useDispatch();
    const trendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    }

    useEffect(() => {
        trendingMovies();
    },[])

}

export default useTrendingMovies;

