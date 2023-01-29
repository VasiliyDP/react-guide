import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let content = <p>No films loaded yet</p>;

  const fetchMoviesListHandler = useCallback(async () => {
    setError(null);
    try {
      setIsLoading(true);
      const request = await fetch("https://swapi.dev/api/films");
      if (!request.ok) {
        throw new Error("Problems with request");
      }
      const response = await request.json();
      const filmsData = await response.results.map((film) => {
        return {
          id: film.episode_id,
          title: film.title,
          releaseDate: film.release_date,
          openingText: film.opening_crawl,
        };
      });

      setMoviesList(filmsData);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesListHandler();
  }, [fetchMoviesListHandler]);

  if (moviesList.length > 0) {
    content = <MoviesList movies={moviesList} />;
  }

  if (error) {
    content = <p>Problems with request</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesListHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
