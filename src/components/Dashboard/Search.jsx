import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
      setQuery(""); // Clear input after search
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission behavior
      handleSearch();
    }
  };

  return (
    <div className="w-full px-4 mb-10  flex justify-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress} // Search on Enter
          className="w-full px-4 py-2 pr-12 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
        >
          <FaSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
