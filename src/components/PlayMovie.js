import { useDispatch, useSelector } from "react-redux";
import usePlayMovie from "../hooks/usePlayMovie";
import { removePlayMovie, removePlayMovieId } from "../utils/moviesSlice";

const PlayMovie = () => {
  console.log("Inside Play Movies");
  const dispatch = useDispatch();
  const { playMovie, playMovieId } = useSelector((store) => store.movies);

  usePlayMovie(playMovieId);

  if (!playMovie) {
    return;
  }

  return (
    <div className="fixed flex items-center top-0 left-0 h-screen w-screen z-20 rounded-lg">
      <div className="w-5/12 m-auto z-20 bg-black text-white overflow-hidden">
        <iframe
          className="w-full aspect-video"
          src={"https://www.youtube.com/embed/" + playMovie.key + "?autoplay=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <h1>{playMovie.original_title}</h1>
        <p>{playMovie.overview}</p>
      </div>
      <div
        className="bg-black bg-opacity-50 absolute left-0 top-0 w-full h-full z-10"
        onClick={() => {
          dispatch(removePlayMovie());
          dispatch(removePlayMovieId());
        }}
      ></div>
    </div>
  );
};

export default PlayMovie;
