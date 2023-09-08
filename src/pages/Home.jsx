import React, { useState, useEffect } from "react";
import SearchMovie from "../components/SearchMovie";
import { getMovieData } from "../utils/Api";
import MovieDisplay from "../components/MovieDisplay";
import { Route, Routes } from "react-router-dom";
import Recents from "./Recents";

function Home() {
  const [movieData, setMovieData] = useState(null);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const storedSearchHistory = localStorage.getItem("searchHistory");
    if (storedSearchHistory) {
      setSearchList(JSON.parse(storedSearchHistory));
    }
  });
  const handleGetMovie = async (movieName) => {
    try {
      const { movieData } = await getMovieData(movieName);
      setMovieData(movieData);
      updateSearchHistory(movieName);
    } catch (error) {
      alert("Error getting movie data.", error);
    }
  };

  const updateSearchHistory = (movie) => {
    const movieName = movie.charAt(0).toUpperCase() + movie.slice(1);
    const storedSearchHistory = localStorage.getItem("searchHistory");

    if (storedSearchHistory) {
      setSearchList(JSON.parse(storedSearchHistory));
    }

    if (!searchList.includes(movieName)) {
      searchList.push(movieName);
      localStorage.setItem("searchHistory", JSON.stringify(searchList));
    }
  };

  return (
    <>
      <SearchMovie getMovie={handleGetMovie} searchList={searchList} />
      <Routes>
        <Route
          path="/Recents"
          element={
            <Recents searchList={searchList} getMovie={handleGetMovie} />
          }
        />
      </Routes>
      <MovieDisplay movieData={movieData} />
    </>
  );
}

export default Home;
