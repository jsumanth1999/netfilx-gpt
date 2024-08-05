
import Header from "./Header";
import useNowPlayingMovie from "../utils/hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useTopRatedMovies from "../utils/hooks/useTopRatedMovies";
import useUpcomingMovies from "../utils/hooks/useUpcomingMovies";
import useTrendingMovies from "../utils/hooks/useTrendingMovies";

const Browse = () => {
  
    useNowPlayingMovie()
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useTrendingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
