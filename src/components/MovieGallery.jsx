import React, { useState, useEffect } from "react";
import "./styles.css";
const Gallery = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=dd09cc03&${category}`);

        if (response.ok) {
          const data = await response.json();
          setMovies(data.Search);
        } else {
          throw new Error("Errore nel fetching dei dati");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category]);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.imdbID} className="col mb-2 text-center px-1">
            <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
          </div>
        ))
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
};

export default Gallery;
