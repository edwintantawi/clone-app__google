import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import micLogo from '../../assets/mic.svg';
import './index.css';
import { Button } from '@material-ui/core';
import { useStateValue } from 'provider/stateProvider';
import { actionTypes } from 'provider/reducer';
import { useHistory } from 'react-router';

const SearchBar = ({ isResult, value }) => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [input, setInput] = useState(value || '');
  const [, dispatch] = useStateValue();
  const history = useHistory();

  const searching = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      value: input,
    });

    history.push('/search');
  };

  return (
    <form onSubmit={searching} style={{ width: isResult && '690px' }}>
      <div className={`search ${activeSearch && 'focused'}`}>
        {isResult || <SearchIcon />}
        <input
          type="text"
          value={input}
          onFocus={() => setActiveSearch(true)}
          onBlur={() => setActiveSearch(false)}
          onChange={(e) => setInput(e.target.value)}
        />
        <ClearIcon className="clickable" />
        <hr />
        <img src={micLogo} alt="mic" width="24px" className="clickable" />
        {isResult && <SearchIcon className="active" />}
      </div>
      <div className={`home__body__mid__action ${isResult && 'hide'}`}>
        <Button type="submit">Google Search</Button>
        <Button>I'm Feeling Lucky</Button>
      </div>
    </form>
  );
};

export default SearchBar;
