import React, { useState } from "react";
import SearchMovie from "../components/SearchMovie";
import { getMovieData } from "../utils/Api";
import MovieDisplay from "../components/MovieDisplay";

function Home() {
  const [movieData, setMovieData] = useState(null);
  // const [movieData, setMovieData] = useState(null);

  const handleGetMovie = async (movieName) => {
    try {
      const { movieData } = await getMovieData(movieName);
      setMovieData(movieData);
    } catch (error) {
      alert("Error getting movie data.", error);
    }
  };
  return (
    <>
      <SearchMovie getMovie={handleGetMovie} />
      <MovieDisplay movieData={movieData} />
    </>
  );
}

export default Home;
