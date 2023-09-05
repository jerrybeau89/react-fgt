import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function SearchMovie({getMovie}) {
  const [movieName, setMovieName] = useState("");

  const handleSearch = () => {
    if (movieName.trim() !== "") {
      getMovie(movieName);
      setMovieName("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="search">
      <TextField
        className="searchBar"
        label="Movie Search..."
        autoFocus={true}
        margin="normal"
        type="search"
        // theme={theme}
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <IconButton aria-label="search movie" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </div>
  );
}

export default SearchMovie;
