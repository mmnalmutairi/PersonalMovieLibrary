import { makeAutoObservable } from 'mobx';
import movies from './Movies';


class MovieLibrary {

    movies = movies;

    constructor() {
        makeAutoObservable(this);
    }


    deleteMovie = (movieId) => {
        const updatedMovies = this.movies.filter((movie) => movie.id !== movieId);
        return this.movies = updatedMovies;
    }



    addMovie = (newMovie) => {
        newMovie.id = this.movies.length + 1;
        this.movies.push(newMovie);

    }

    changeWached = () => {


    }

}

const movielibrary = new MovieLibrary();

export default movielibrary;