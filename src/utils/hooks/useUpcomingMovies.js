import { useDispatch } from "react-redux";
import { options } from "../constants"
import { addUpcomingMovies } from "../moviesSlice";
import { useEffect } from "react";


const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const upcomingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        upcomingMovies();
    },[])

};

export default useUpcomingMovies;