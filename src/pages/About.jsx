import React from "react";

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h4>About Us</h4>
          <h5>Database Sources:</h5>
          <br />
          <img
            src="./assets/images/TMDB-logo.svg"
          />
          <br />
          <a target="_blank" href="https://www.themoviedb.org/">
            https://www.themoviedb.org/
          </a>
          <p>OMDb API</p>
          <a target="_blank" href="https://www.omdbapi.com/">
            https://www.omdbapi.com/
          </a>
          <br />
          <br />
          <h5>Developers:</h5>
        </div>
      </div>
    </div>
  );
}

export default About;
