import React from 'react'

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />

        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  )
}
export default Search