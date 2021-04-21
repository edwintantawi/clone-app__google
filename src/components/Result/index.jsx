import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './index.css';
const Result = ({ data }) => {
  return (
    <div className="result">
      <span className="result__url">
        https://{data.displayLink}
        <ArrowDropDownIcon />
      </span>
      <a href={data.link} className="result__title">
        <h3>{data.title}</h3>
      </a>
      <p className="result__description">{data.snippet}</p>
    </div>
  );
};

export default Result;
