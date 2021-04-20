import React from 'react';
import './index.css';
const Result = ({ data }) => {
  return (
    <div className="result">
      <span className="result__url">{data.displayLink}</span>
      <a href={data.link} className="result__title">
        <h3>{data.title}</h3>
      </a>
      <p className="result__description">{data.snippet}</p>
    </div>
  );
};

export default Result;
