import { MOVIE_POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 px-4">
      <img className="" src={MOVIE_POSTER_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
