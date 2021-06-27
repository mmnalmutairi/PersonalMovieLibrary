import './App.css';
import { Title } from './components/styles';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

//////////////// *****************************
import MovieList from './components/MovieList';

import movies from './components/Movies';

import WatchingList from './components/WatchingList';


function App() {

  const [query, setQuery] = useState("");

  return (

    <div class="row">

      <div class="column">
        <div className="watchlist-section">
          <Title> Watchlist </Title>
          <SearchBar setQuery={setQuery} />
          <MovieList movies={movies} query={query} />
        </div>
      </div>

      <div class="column">
        <div className="watched-section">
          <Title> Watched </Title>
          <SearchBar setQuery={setQuery} />
          <WatchingList query={query} />
        </div>
      </div>

    </div>
  );
}


export default App;
