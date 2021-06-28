import { SearchBarStyled } from './styles';

const SearchBarl = (props) => {
    return (
        <SearchBarStyled
            placeholder="Search by product"
            onChange={(event) => props.setQuery(event.target.value)}
        />
    );
};
export default SearchBarl;