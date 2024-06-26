import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 py-6">
      <h1 className="text-3xl p-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
