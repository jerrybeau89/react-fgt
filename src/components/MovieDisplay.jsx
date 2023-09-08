import React from "react";
import MovieCard from "./MovieCard";

function MovieDisplay({movieData}) {
  return (
    <div className="moviesContainer">
      <MovieCard  movieInfo={movieData} />
    </div>
  );
}

export default MovieDisplay;
