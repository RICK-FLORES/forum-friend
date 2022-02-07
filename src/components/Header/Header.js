import React from 'react';
import SearchBar from '../../features/search/SearchBar';

const Header = () => {
  return (
    <header>
      <div>
        Logo
      </div>
      <SearchBar />
      <button>Login</button>
    </header>
  )
};

export default Header;
