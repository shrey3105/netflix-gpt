import { useDispatch } from "react-redux";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";
import Header from "./Header";
import { toggleGptSearch } from "../utils/gptSlice";
import { useEffect } from "react";
import { BG_BANNER_PATH } from "../utils/constants";

const GPTSearchPage = () => {
  const dispatch = useDispatch();
  dispatch(toggleGptSearch(true));

  useEffect(() => {
    return () => {
      console.log("GPT Search Page Unmounted");
      dispatch(toggleGptSearch(false));
    };
  }, []);

  return (
    <div className="relative min-h-[100vh] bg-black z-0">
      <Header></Header>
      <GPTSearchBar></GPTSearchBar>
      <GPTMovieSuggestion></GPTMovieSuggestion>
      <div className="absolute top-0 h-full w-full z-[-1] opacity-50">
        <img className="w-full h-full" src={BG_BANNER_PATH}></img>
      </div>
    </div>
  );
};

export default GPTSearchPage;
