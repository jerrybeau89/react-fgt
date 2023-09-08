import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fromLocalStorage } from "../utils/localStorage";

function Recents({ getMovie }) {
    const [recentsList, setRecentsList] = useState([]);

useEffect(() => {
    const storedSearchHistory = localStorage.getItem("searchHistory");
    if (storedSearchHistory) {
        setRecentsList(JSON.parse(storedSearchHistory));
}
},[]);

  return (
    <div>
      {recentsList.map((item, index) => (
        <button key={index} onClick={() => getMovie(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default Recents;
