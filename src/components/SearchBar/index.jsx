import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import micLogo from '../../assets/mic.svg';
import './index.css';

const SearchBar = () => {
  return (
    <div className="search">
      <SearchIcon />
      <input type="text" />
      <ClearIcon className="clickable" />
      <hr />
      <img src={micLogo} alt="mic" width="24px" className="clickable" />
    </div>
  );
};

export default SearchBar;
