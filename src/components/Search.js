import SearchBar from "material-ui-search-bar";

function Search(props) {
    const { query, updateQuery } = props;
    return (
        <SearchBar
            value={query}
            onChange={updateQuery}
        />
    )
}

export default Search;