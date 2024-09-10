import React, { useEffect, useState } from 'react';
import Card from './Card';

function Movie1() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=af1cf641");
      const data = await response.json();
      setMovie(data);
    }
    fetchMovie();
  }, []);

  return (
    <div>
      {movie ? <Card movie={movie} /> : <p>Loading...</p>}
    </div>
  );
}

export default Movie1;
