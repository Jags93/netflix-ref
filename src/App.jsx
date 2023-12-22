import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieGallery from "./components/MovieGallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid px-4">
        <MovieGallery title="Trending Now" genre="Trending" />
        <MovieGallery title="Watch it Again" genre="Watch Again" />
        <MovieGallery title="New Releases" genre="New Releases" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
