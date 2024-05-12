import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPlayMovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePlayMovie = (movie_id) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    console.log("Inside Play Movie Hook");
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movie_id + "/videos",
      API_OPTIONS
    );

    const json = await data.json();

    const filteredTrailers = json.results.filter(
      (video) => video.type == "Trailer"
    );

    const trailer =
      filteredTrailers.length > 0 ? filteredTrailers[0] : json.results[0];

    dispatch(addPlayMovie(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default usePlayMovie;
