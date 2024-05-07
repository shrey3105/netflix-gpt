const VideoTitle = ({ movie_id, overview, title }) => {
  return (
    <div className="text-white absolute bottom-36 left-20 z-20">
      <h1 className="text-4xl font-bold my-4">{title}</h1>
      <p className="w-1/2 my-4">{overview}</p>
      <div>
        <button className="py-2 px-4 text-black bg-white rounded-lg font-semibold mr-4 hover:bg-slate-200">
          Play
        </button>
        <button className="py-2 px-4 text-black bg-white bg-opacity-40 rounded-lg font-semibold mr-">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
