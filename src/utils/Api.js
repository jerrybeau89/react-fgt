const apiKeyOMDB = import.meta.env.VITE_REACT_APP_OMDB_API_KEY;
const apiKeyTMDB = import.meta.env.VITE_REACT_APP_TMDB_API_KEY;

export async function getMovieData(movieName) {
  const OMDBUrlSearch = `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKeyOMDB}`;

  try {
    const omdbSearchResponse = await fetch(OMDBUrlSearch);
    const omdbSearchData = await omdbSearchResponse.json();

    const movieData = omdbSearchData.Search.map((item) => ({
      title: item.Title,
      poster: item.Poster,
    }));

    return { movieData };
  } catch (error) {
    console.error("Error fetching movie data: ", error);
    throw error;
  }
}

export async function getFeaturedData() {
  const TMDBUrlSearch = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKeyTMDB}`;

  try {
    const tmdbSearchResponse = await fetch(TMDBUrlSearch);
    const tmdbSearchData = await tmdbSearchResponse.json();
    // console.log(tmdbSearchData);

    const featuredData = tmdbSearchData.results.map((item) => ({
      title: item.title,
      poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
    }));
    // console.log(featuredData);

    return { featuredData };
  } catch (error) {
    console.error("Error fetching featured movie data: ", error);
  }
}
