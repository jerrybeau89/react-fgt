// const apiKeyOMDB = import.meta.env.VITE_REACT_APP_OMDB_API_KEY;
const apiKeyTMDB = import.meta.env.VITE_REACT_APP_TMDB_API_KEY;
// `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKeyOMDB}`;

function getGenreName(genreId, genres) {
  const genre = genres.find((genre) => genre.id === genreId);
  return genre ? genre.name : "Unknown";
}

// function getMoviePoster(posterPath){
//   const poster = posterPath;
//   return poster ? poster.poster_path : "src/assets/images/FGTH.png";
// }

async function fetchGenres(apiKeyTMDB) {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKeyTMDB}`
  );
  const data = await response.json();
  return data.genres;
}

export async function getMovieData(movieName) {
  const TMDBUrlSearch = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${apiKeyTMDB}`;
  const genres = await fetchGenres(apiKeyTMDB);

  try {
    const tmdbSearchResponse = await fetch(TMDBUrlSearch);
    const tmdbSearchData = await tmdbSearchResponse.json();

    const movieData = tmdbSearchData.results.map((item) => ({
      title: item.title,
      poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      popularity: item.popularity,
      release_date: item.release_date,
      overview: item.overview,
      genres: item.genre_ids.map((genreId) => getGenreName(genreId, genres)),
    }));

    return { movieData };
  } catch (error) {
    console.error("Error fetching movie data: ", error);
    throw error;
  }
}

export async function getFeaturedData() {
  const TMDBUrlSearch = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKeyTMDB}`;
  const genres = await fetchGenres(apiKeyTMDB);

  try {
    const tmdbSearchResponse = await fetch(TMDBUrlSearch);
    const tmdbSearchData = await tmdbSearchResponse.json();
    // console.log(tmdbSearchData);

    const featuredData = tmdbSearchData.results.map((item) => ({
      title: item.title,
      poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      popularity: item.popularity,
      release_date: item.release_date,
      overview: item.overview,
      genres: item.genre_ids.map((genreId) => getGenreName(genreId, genres)),
    }));
    // console.log(featuredData);

    return { featuredData };
  } catch (error) {
    console.error("Error fetching featured movie data: ", error);
  }
}
