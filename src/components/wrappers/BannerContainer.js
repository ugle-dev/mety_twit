import React from 'react';
import SearchBar from './SearchBar';
import AddBot from './AddBot';

const BannerContainer = () => {
  return (
    <div className="banner">
      <SearchBar />
      <AddBot />
    </div>
  );
};

export default BannerContainer;
