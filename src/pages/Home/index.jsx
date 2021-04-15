import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar, Button, IconButton } from '@material-ui/core';

import './index.css';
import SearchBar from 'components/SearchBar';
import Footer from 'components/Footer';
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
        <div className="home__body__top">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="google"
          />
        </div>
        <div className="home__body__mid">
          <SearchBar />
          <div className="home__body__mid__action">
            <Button>Google Search</Button>
            <Button>I'm Feeling Lucky</Button>
          </div>
        </div>
        <div className="home__body__bottom">{/*  */}</div>
      </main>

      <Footer>
        <ul>
          <li>
            <a
              href="https://about.google/?utm_source=google-ID&utm_medium=referral&utm_campaign=hp-footer&fg=1"
              className="button"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/intl/en_id/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
              className="button"
            >
              Advertising
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
              className="button"
            >
              Business
            </a>
          </li>
          <li>
            <a
              href="https://google.com/search/howsearchworks/?fg=1"
              className="button"
            >
              How Search works
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a
              href="https://policies.google.com/privacy?hl=en-ID&fg=1"
              className="button"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="https://policies.google.com/terms?hl=en-ID&fg=1"
              className="button"
            >
              Terms
            </a>
          </li>
          <li>Settings</li>
        </ul>
      </Footer>
    </div>
  );
};

export default Home;
