import React from 'react';

const SearchBar = () => (
  <div className="searchbar-wrapper">
    <div className="searchbar-flexbox">
      <div className="searchbar-search">
        <div>
          <input type="text" placeholder="       Search . . ." required />
        </div>
      </div>
    </div>
  </div>
);

export default SearchBar;