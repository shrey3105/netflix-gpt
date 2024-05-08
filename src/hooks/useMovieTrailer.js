import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movie_id) => {
  const [mainTrailer, setMainTrailer] = useState(null);

  const getMovieTrailer = async () => {
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

    setMainTrailer(trailer);
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);

  return mainTrailer;
};

export default useMovieTrailer;
