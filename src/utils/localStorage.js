export function addToLocalStorage(movie) {
    const movieName = movie.charAt(0).toUpperCase() + movie.slice(1);
  const storedSearchHistory = localStorage.getItem("searchHistory");
  let searchList = [];

  if (storedSearchHistory) {
    searchList = JSON.parse(storedSearchHistory);
  }

  if (!searchList.includes(movieName)) {
    searchList.push(movieName);

    localStorage.setItem("searchHistory", JSON.stringify(searchList));
  }
}

export function fromLocalStorage() {
  const showSearchHistory = localStorage.getItem("searchHistory");
  let movieList = [];

  if (showSearchHistory) {
    movieList = JSON.parse(showSearchHistory);
  }

  return movieList;
}
