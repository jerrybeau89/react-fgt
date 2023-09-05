const apiKeyOMDB = import.meta.env.VITE_REACT_APP_OMDB_API_KEY;
const apiKeyTMDB = import.meta.env.VITE_REACT_APP_TMDB_API_Key;

export async function getMovieData(movieName) {
    const OMDBUrlSearch = `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKeyOMDB}`;
    
 try {
   const omdbSearchResponse = await fetch(OMDBUrlSearch);
   const omdbSearchData = await omdbSearchResponse.json();
   console.log(omdbSearchData)

   const movieData = omdbSearchData.Search.map((item) => ({
     title: item.Title,
     poster: item.Poster,
   }));

   return {movieData}
 } catch (error) {
   console.error("Error fetching movie data:", error);
   throw error;
 }
}
