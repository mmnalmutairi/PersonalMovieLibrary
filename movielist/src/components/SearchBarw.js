import { SearchBarStyled } from './styles';

const SearchBarw = (props) => {
    return (
        <SearchBarStyled
            placeholder="Search by product"
            onChange={(event) => props.setMovie(event.target.value)}
        />
    );
};
export default SearchBarw;