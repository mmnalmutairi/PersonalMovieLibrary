import DeleteButton from './Buttons/DeleteButton';
import { observer } from 'mobx-react';
import WatchedButton from './Buttons/WatchedButton';
import MovieItem from './MovieItem';

const MovieList = (props) => {

    const movieList = props.movies.filter((movie) => movie.name.toLowerCase().includes(props.query)).map((movie) =>
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