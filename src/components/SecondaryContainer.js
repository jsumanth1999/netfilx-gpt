import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.moviesNowPlaying && (
      <div className=" bg-black">
        <div className="pl-4 md:pl-12 mt-0 md:-mt-56 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.moviesNowPlaying} />
          <MovieList title={"Trending Movies"} movies={movies.trendingMovies} />
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"}  movies={movies.upcomingMovies} />
          <MovieList title={"Horrer"} movies={movies.moviesNowPlaying} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
