import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import PlayMovie from "./PlayMovie";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();

  const playMovieId = useSelector((store) => store.movies.playMovieId);

  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
      {playMovieId && <PlayMovie></PlayMovie>}
    </div>
  );
};

export default Browse;
