import { useDispatch } from "react-redux";
import { MOVIE_POSTER_URL } from "../utils/constants";
import { addPlayMovie, addPlayMovieId } from "../utils/moviesSlice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const posterPath = movie.poster_path;
  if (!posterPath) {
    return;
  }

  const handlePlayMovie = () => {
    dispatch(addPlayMovieId(movie.id));
  };

  return (
    <div className="w-40 px-4">
      <img
        className="cursor-pointer"
        src={MOVIE_POSTER_URL + posterPath}
        onClick={handlePlayMovie}
      />
    </div>
  );
};

export default MovieCard;
