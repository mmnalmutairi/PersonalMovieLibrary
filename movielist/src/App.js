import './App.css';
import { Title, RiVideoAddLineStyled } from './components/styles';
import SearchBarl from './components/SearchBarl';
import SearchBarw from './components/SearchBarw'
import { useState } from 'react';
import { observer } from 'mobx-react';

//////////////// *****************************
import MovieList from './components/MovieList';

import movielibrary from './components/MovieLibrary';

import WatchingList from './components/WatchingList';
import MovieModal from './components/modals/MovieModal';


function App() {

  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState("");



  const [isOpen, setIsOpen] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  return (

    <div class="row">

      <div class="column">
        <div className="watchlist-section">
          <Title> Watchlist </Title>
          <SearchBarl setQuery={setQuery} />
          < RiVideoAddLineStyled size="3em" onClick={openModal} />
          <MovieModal isOpen={isOpen} closeModal={closeModal} />
          <MovieList movies={movielibrary.movies} query={query} />

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


export default observer(App);
