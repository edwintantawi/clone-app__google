import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import micLogo from '../../assets/mic.svg';
import './index.css';

const SearchBar = ({ isResult }) => {
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <div
      className={`search ${activeSearch && 'focused'}`}
      style={{ width: isResult && '690px' }}
    >
      {isResult || <SearchIcon />}
      <input
        type="text"
        onFocus={() => setActiveSearch(true)}
        onBlur={() => setActiveSearch(false)}
      />
      <ClearIcon className="clickable" />
      <hr />
      <img src={micLogo} alt="mic" width="24px" className="clickable" />
      {isResult && <SearchIcon className="active" />}
    </div>
  );
};

export default SearchBar;
