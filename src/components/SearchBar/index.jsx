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
    if (input !== '') {
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        value: input,
      });

      history.push('/search');
    }
  };

  const handleClearInput = () => {
    setInput('');
  };

  return (
    <form
      className="search"
      onSubmit={searching}
      style={{ width: isResult && '690px' }}
    >
      <div className={`search__bar ${activeSearch && 'focused'}`}>
        {isResult || <SearchIcon />}
        <input
          type="text"
          value={input}
          onFocus={() => setActiveSearch(true)}
          onBlur={() => setActiveSearch(false)}
          onChange={(e) => setInput(e.target.value)}
        />
        {input && (
          <div className="search__clear">
            <ClearIcon className="clickable" onClick={handleClearInput} />
            <hr />
          </div>
        )}
        <img src={micLogo} alt="mic" width="24px" className="clickable" />
        {isResult && <SearchIcon className="active" onClick={searching} />}
      </div>

      <div className={`search__buttons ${isResult && 'hide'}`}>
        <Button className="search__button" type="submit">
          Google Search
        </Button>
        <Button className="search__button">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
};

export default SearchBar;
