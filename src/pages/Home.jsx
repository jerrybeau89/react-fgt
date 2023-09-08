import React, { useState, useEffect } from "react";
import SearchMovie from "../components/SearchMovie";
import { getMovieData } from "../utils/Api";
import MovieDisplay from "../components/MovieDisplay";
import { Route, Routes, useLocation } from "react-router-dom";
import Recents from "./Recents";

function Home() {
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query")
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const storedSearchHistory = localStorage.getItem("searchHistory");
    if (storedSearchHistory) {
      setSearchList(JSON.parse(storedSearchHistory));
    }

    if (searchQuery){
      handleGetMovie(searchQuery);
    }
  },[searchQuery]);
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
    
    setSearchList((prevSearchList) => {
      if (!prevSearchList.includes(movieName)) {
        const updatedSearchList = [...prevSearchList, movieName];
        localStorage.setItem(
          "searchHistory",
          JSON.stringify(updatedSearchList)
        );
        return updatedSearchList;
      }
      return prevSearchList;
    });
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
