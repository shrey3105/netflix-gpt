import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  const mainTrailer = useMovieTrailer(movie_id);

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
