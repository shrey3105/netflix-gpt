import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="text-white -mt-52 relative z-20">
        {movies.nowPlayingMovies && (
          <MovieList
            title="Now Playing"
            movies={movies.nowPlayingMovies}
          ></MovieList>
        )}

        {movies.topRatedMovies && (
          <MovieList
            title="Top Rated"
            movies={movies.topRatedMovies}
          ></MovieList>
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
