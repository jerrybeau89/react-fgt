import React from "react";
import MovieCard from "../components/MovieCard";

function Favorites({ getFavorite}) {

  if (!getFavorite){
    return <div> Favorites</div>
  }

  return (
    <>
      <div className="favorites-container">
        <h2>Favorites</h2>
        <div className="favorites-list">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movieInfo={movie} />
          ))}
        </div>
      </div>
      {/* <div className="alertBox">
      <br />
      <br />
      This is the Favorites Page
      <br />
      <br />
      <br />
      <div className="alertMessage">
        It appears you have selected a page that it currently under
        construction. If you believe this to be an error, please feel free to
        reach out with any questions or concerns! Other wise, return to home to
        continue your movie search, thank you!
      </div>
    </div> */}
    </>
  );
}

export default Favorites;
