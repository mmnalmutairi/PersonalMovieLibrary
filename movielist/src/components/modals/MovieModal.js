import { React, useState } from 'react';
import Modal from 'react-modal';
import movielibrary from '../MovieLibrary';
import { CreateButtonStyled } from '../styles';
const MovieModal = (props) => {

    const [movie, setmovie] = useState({
        id: "",
        name: ""
    });

    const handleChange = (event) => {
        setmovie({ ...movie, [event.target.name]: event.target.value });

    }

    const handleSubmit = (event) => {

        event.preventDefault();
        movielibrary.addMovie(movie);
        props.closeModal();

    };

    return (
        <div>
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.closeModal}
                contentLabel="Movie Modal"
            >

                <h1> Add a Movie</h1>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Book Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter a movie name" name="name" onChange={handleChange} />
                    </div>
                    <CreateButtonStyled> Add Movie </CreateButtonStyled>
                </form>
            </Modal>
        </div>
    )
}
export default MovieModal;