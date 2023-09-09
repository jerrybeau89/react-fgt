import React, { useState, useEffect } from "react";
import { getFeaturedData } from "../utils/Api"
import MovieDisplay from "../components/MovieDisplay"

function Featured() {
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(() => {
  const handleGetFeatured = async () => {
    try {
      const { featuredData } = await getFeaturedData();
      setFeaturedData(featuredData);
    } catch (error) {
      alert("Error getting featured movies.", error);
    }
  };

  handleGetFeatured()
},[])

 
  if (!featuredData) {
    return <div> Please Search for a Movie to Display</div>;
  }
  return (
   <div>
    <h2>Featured Movies</h2>
    <div>
      <MovieDisplay movieData={featuredData}/>
    </div>
   </div>
        
  );
}

export default Featured;
