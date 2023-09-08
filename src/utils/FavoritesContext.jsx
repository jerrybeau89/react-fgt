// // Step 1: Create a FavoritesContext to manage favorite movies using React Context API
// import React, { createContext, useContext, useState } from "react";

// // Create a context for managing favorite movies
// const FavoritesContext = createContext();

// export function FavoritesProvider({ children }) {
//   const [favorites, setFavorites] = useState([]);

//   // Function to add a movie to favorites
//   const addFavorite = (movieData) => {
//     setFavorites([...favorites, movieData]);
//   };

//   // Function to remove a movie from favorites
//   const removeFavorite = (movieData) => {
//     const updatedFavorites = favorites.filter(
//       (movie) => movie.id !== movieData.id
//     );
//     setFavorites(updatedFavorites);
//   };

//   return (
//     <FavoritesContext.Provider
//       value={{ favorites, addFavorite, removeFavorite }}
//     >
//       {children}
//     </FavoritesContext.Provider>
//   );
// }

// export function useFavorites() {
//   return useContext(FavoritesContext);
// }
