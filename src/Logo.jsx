import { IoMdSearch } from "react-icons/io";

const Logo = ({ search_cou, setSearch, handleSearch }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <div id="head_cont">
        <div className="search-container">
          <input
            type="text"
            id="search_bar"
            placeholder="Search by location"
            className="search-input"
            value={search_cou}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <IoMdSearch
            id="search_icon"
            size={22}
            className="search-icon"
            onClick={handleSearch}
          />
        </div>
      </div>
    </>
  );
};

export default Logo;
