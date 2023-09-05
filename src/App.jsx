import React, { useState } from "react";
import "./App.css";
import { getMovieData } from "./utils/Api";
import SearchMovie from "./components/SearchMovie";
import MovieDisplay from "./components/MovieDisplay";

function App() {
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

export default App;
