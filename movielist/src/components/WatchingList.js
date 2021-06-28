import DeleteButton from './Buttons/DeleteButton';
import UnWatchedButton from './Buttons/UnWatchedButton';
import watchedlist from './WatchedList';
import MovieItem from './MovieItem';

const WatchingList = (props) => {

    const watchinglist = watchedlist.filter((movie) => movie.name.toLowerCase().includes(props.movie)).map((watched) =>

        <div className="wlist">
            <h4 className="wcontainer">
                <MovieItem movieName={watched.name} />
                <div className="row">
                    <div className="buttons-col-d">
                        <DeleteButton movieId={watched.id} />
                    </div>
                    <div className="buttons-col-w">
                        <UnWatchedButton />
                    </div>
                </div>
            </h4>
        </div>

    );

    return (
        <div>
            {watchinglist}
        </div>
    );
}

export default WatchingList;