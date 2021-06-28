import './App.css';
import { Title } from './components/styles';
import SearchBarl from './components/SearchBarl';
import SearchBarw from './components/SearchBarw'
import { useState } from 'react';

//////////////// *****************************
import MovieList from './components/MovieList';

import movies from './components/Movies';

import WatchingList from './components/WatchingList';


function App() {

  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState("");

  return (

    <div class="row">

      <div class="column">
        <div className="watchlist-section">
          <Title> Watchlist </Title>
          <SearchBarl setQuery={setQuery} />
          <MovieList movies={movies} query={query} />

        </div>
      </div>

      <div class="column">
        <div className="watched-section">
          <Title> Watched </Title>
          <SearchBarw setMovie={setMovie} />
          <WatchingList movie={movie} />
        </div>
      </div>

    </div>
  );
}


export default App;
