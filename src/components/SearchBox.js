import React from 'react';

const SearchBox = ({ searchChange, searchfield }) => {
  return (
    <div>
      <input
        type='search'
        placeholder='Filter'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;
