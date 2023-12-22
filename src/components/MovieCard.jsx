import React from "react";
import "./styles.css";

function MovieCard({ movie }) {
  return (
    <div className="col mb-2 text-center px-1">
      <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
    </div>
  );
}

export default MovieCard;
