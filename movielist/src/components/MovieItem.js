import { observer } from 'mobx-react';
import movielibrary from './MovieLibrary';

const MovieItem = (props) => {

    // const handleWatchButton = () => {
    //     movielibrary.changeWatched(props.movie.id);
    // };

    return (
        <div>
            <h3>{props.movieName}</h3>
            {/* <button onClick={handleWatchButton}> </button> */}
        </div>
    )

}

export default observer(MovieItem);