import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movie_id }) => {
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

  if (!mainTrailer) {
    return;
  }

  return (
    <div className="z-[-1]">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          mainTrailer.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
