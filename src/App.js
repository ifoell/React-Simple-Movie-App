import React, {useState} from 'react';
import './App.css';
import SearchMovies from './component/searchMovie';
import MovieList from './component/movieList';

function App() {
  const [value] = useState("");

  const [movies, setMovies] = useState([]);

  const onsubmit = (movies) => {
      setMovies(movies.results);
  };

  return (
    <div className="App">
      <h1 className="title">React Movie Search</h1>
      <div className="container" id="container">
        <SearchMovies data={value}
          onsubmit={e => {
            onsubmit(e);
          }}
          />
        <div className="card-list" id="card">
          {
            (movies.filter(movie => movie.poster_path).map(movie => (
                <MovieList movie={movie} key={movie.id} />
            )))
          }
        </div> 
      </div>
    </div>
  );
}

export default App;
