require('dotenv').config();

const apiKeyOMDB = process.env.OMDB_API_KEY;
const apiKeyTMDB = process.env.TMDB_API_Key

export async function getMovieData(movieName) {
    const OMDBUrl = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKeyOMDB}`;
    

  //Random number generator used to determine the page query for the API call.
  const queryNum = function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  const getOMDBResponse = await fetch()
}
