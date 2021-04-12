import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import './index.css';
import { Avatar, IconButton } from '@material-ui/core';

const Home = () => {
  return (
    <div className="home">
      <nav className="home__nav">
        <div className="home__nav__menu">
          <div className="google__service">
            <a href="https://mail.google.com" className="button">
              Gmail
            </a>
            <a
              href="https://www.google.co.id/imghp?hl=en&authuser=0&ogbl"
              className="button"
            >
              Images
            </a>
          </div>
          <div className="google__menu">
            <IconButton>
              <AppsIcon />
            </IconButton>
            <IconButton>
              <Avatar />
            </IconButton>
          </div>
        </div>
      </nav>
      <main className="home__body">
        <h1>Main</h1>
      </main>
      <footer className="home__footer">
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export default Home;
