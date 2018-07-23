import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="SearchBox">
      <input
        className="SearchBox"
        aria-label="Filter Restaurants"
        tabIndex="2"
        type='search'
        placeholder='Filter'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;
