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



    addMovie = () => {

    }
}

const movielibrary = new MovieLibrary();

export default movielibrary;