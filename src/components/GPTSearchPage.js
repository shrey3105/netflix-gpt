import { useDispatch, useSelector } from "react-redux";
import GPTSearchBar from "./GPTSearchBar";
import Header from "./Header";
import { toggleGptSearch } from "../utils/gptSlice";
import { useEffect } from "react";
import { BG_BANNER_PATH } from "../utils/constants";
import MovieList from "./MovieList";
import PlayMovie from "./PlayMovie";

const GPTSearchPage = () => {
  const dispatch = useDispatch();

  const searchedMovieResults = useSelector(
    (store) => store.gpt.searchedMovieResults
  );

  const playMovieId = useSelector((store) => store.movies.playMovieId);

  useEffect(() => {
    dispatch(toggleGptSearch(true));
    return () => {
      console.log("GPT Search Page Unmounted");
      dispatch(toggleGptSearch(false));
    };
  }, []);

  return (
    <div className="relative min-h-[100vh] bg-black z-0">
      <Header></Header>
      <GPTSearchBar></GPTSearchBar>
      <div className="py-6 px-4 z-10">
        {searchedMovieResults && (
          <MovieList
            title={"Your results"}
            movies={searchedMovieResults}
          ></MovieList>
        )}
      </div>
      <div className="absolute top-0 h-full w-full z-[-1] opacity-50">
        <img className="w-full h-full" src={BG_BANNER_PATH}></img>
      </div>
      {playMovieId && <PlayMovie></PlayMovie>}
    </div>
  );
};

export default GPTSearchPage;
