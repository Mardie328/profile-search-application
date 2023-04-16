import App from "../App";

const SearchBar = ({ setSearchInput }) => {
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <form>
      <input
        className="search-bar"
        type="text"
        placeholder="Search by name..."
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

export default SearchBar;
