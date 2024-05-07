import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) {
    return;
  }

  const { title, overview, id } = movies[0];

  return (
    <div className="relative z-0">
      <VideoBackground movie_id={id}></VideoBackground>
      <VideoTitle title={title} overview={overview} movie_id={id}></VideoTitle>
      <div className="absolute w-full h-full bg-black bg-opacity-40 z-10 top-0 left-0"></div>
    </div>
  );
};

export default MainContainer;
