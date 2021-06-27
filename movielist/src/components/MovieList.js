import DeleteButton from './Buttons/DeleteButton';
import { observer } from 'mobx-react';
import movielibrary from './MovieLibrary';
import WatchedButton from './Buttons/WatchedButton';
import movies from './Movies';
import MovieItem from './MovieItem';

const MovieList = (props) => {

    const movieList = movies.filter((movie) => movie.name.toLowerCase().includes(props.query)).map((movie) =>
        <div className="list">
            <h4 className="container">
                <MovieItem movieName={movie.name} />
                <div className="row">
                    <div className="buttons-col-d">
                        <DeleteButton movieId={movie.id} />
                    </div>
                    <div className="buttons-col-w">
                        <WatchedButton />
                    </div>
                </div>
            </h4>
        </div>
    );


    return (
        <div>
            {movieList}
        </div>
    )

}


export default observer(MovieList);