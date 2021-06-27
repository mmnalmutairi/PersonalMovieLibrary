import movielibrary from "../MovieLibrary";


const DeleteButton = (props) => {

    const handleDelete = () => {

        console.log(`Delete cookie with the ID ${props.movieId}`);
        movielibrary.deleteMovie(props.movieId);
    };

    return (
        <button type="button" class="btn btn-danger" onClick={handleDelete} > Delete </button>
    )



};
export default DeleteButton;