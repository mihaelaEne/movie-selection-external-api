
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Movie1 from './Movie1';
import Movie2 from './Movie2';
import Movie3 from './Movie3';


function App() {
  return (
    <Router>
      <div className="container">
        <h1>Movie Selection</h1>
        <nav>
          <Link to="/movie1" className="movie-link">Movie1</Link>
          <br></br>
          <Link to="/movie2" className="movie-link">Movie2</Link>
          <br></br>

          <Link to="/movie3" className="movie-link">Movie3</Link>

        </nav>
        <Routes>
          <Route path="/movie1" element={<Movie1 />} />
          <Route path="/movie2" element={<Movie2 />} />
          <Route path="/movie3" element={<Movie3 />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
