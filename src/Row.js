import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css";
const base_url = "https://image.tmdb.org/t/p/original";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.table(movies);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movies) => {
          return (
            <img
              key={movies.id}
              className={`row__poster ${isLargeRow && "large__poster"}`}
              src={`${base_url}${
                isLargeRow ? movies.poster_path : movies.backdrop_path
              }`}
              alt={movies.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
