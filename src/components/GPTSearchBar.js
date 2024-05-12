import { useDispatch, useSelector } from "react-redux";
import { LANGUAGE_TRANSLATED_TEXT } from "../utils/languages/languageConstants";
import { useRef, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { updateSearchedMovieResults } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const lang = useSelector((store) => store.gpt.language);
  const dispatch = useDispatch();

  const searchText = useRef(null);

  const fetchGptResults = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchText.current.value +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(updateSearchedMovieResults(json.results));
  };

  return (
    <div className="pt-[10%] z-10">
      <form
        className="w-1/2 mx-auto flex p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="py-2 px-4 flex-1 rounded-lg border-none outline-none"
          type="text"
          placeholder={LANGUAGE_TRANSLATED_TEXT[lang].inputPlaceholder}
        ></input>
        <button
          className="text-white font-semibold px-4 py-2 ml-4 bg-red-600 rounded-lg"
          onClick={fetchGptResults}
        >
          {LANGUAGE_TRANSLATED_TEXT[lang].btnText}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
