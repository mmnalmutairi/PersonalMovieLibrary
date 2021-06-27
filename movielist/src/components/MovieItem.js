import DeleteButton from "./Buttons/DeleteButton";
import { observer } from 'mobx-react';
import movielibrary from './MovieLibrary';

const MovieItem = (props) => {

    return (
        <div>
            <h3>{props.movieName}</h3>
            {/* <button> Watched </button>
            <DeleteButton movieId={movielibrary.movies.id} > Delete </DeleteButton> */}
        </div>
    )

}


export default observer(MovieItem);