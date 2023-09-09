import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fromLocalStorage } from "../utils/localStorage";

function Recents() {
    const [recentsList, setRecentsList] = useState([]);
    const navigate = useNavigate();

useEffect(() => {
    const storedSearchHistory = localStorage.getItem("searchHistory");
    if (storedSearchHistory) {
        setRecentsList(JSON.parse(storedSearchHistory));
}
},[]);

const handleRecentsItemClick = (item) => {
  navigate(`/home?query=${item}`)
}

  return (
    <div>
      {recentsList.map((item, index) => (
        <button key={index} onClick={() => handleRecentsItemClick(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default Recents;
