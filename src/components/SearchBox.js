import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        tabIndex="1"
        type='search'
        placeholder='Filter'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;
