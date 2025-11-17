/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

import "./SearchBar.css";

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <form className='search-container' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Pesquise por um modelo de carro...'
        value={query || ""}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type='submit'>
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
