import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from 'components/SearchBar';
import UserProfile from 'components/UserProfile';
import Footer from 'components/Footer';
import icon_search_active from 'assets/search-active.svg';
import icon_news from 'assets/news.svg';
import icon_images from 'assets/images.svg';
import icon_shopping from 'assets/shopping.svg';
import icon_videos from 'assets/videos.svg';
import icon_more from 'assets/more.svg';
import './index.css';

// bp 960px

const SearchResult = () => {
  return (
    <div className="searchResult">
      <nav className="searchResult__nav">
        <div className="wrapper" id="navigation">
          <div className="wrapper">
            <Link to="/" className="brand">
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="google"
              />
            </Link>
            <SearchBar isResult />
          </div>
          <UserProfile className="floating" />
        </div>
      </nav>

      <div className="searchResult__navigation">
        <div className="container">
          <ul>
            <li className="active">
              <img src={icon_search_active} alt="all" />
              <span>All</span>
            </li>
            <li>
              <img src={icon_news} alt="news" />
              News
            </li>
            <li>
              <img src={icon_images} alt="images" />
              Images
            </li>
            <li>
              <img src={icon_shopping} alt="shopping" />
              Shopping
            </li>
            <li>
              <img src={icon_videos} alt="videos" />
              Videos
            </li>
            <li>
              <img src={icon_more} alt="more" />
              More
            </li>
          </ul>
          <ul>
            <li>Settings</li>
            <li>Tools</li>
          </ul>
        </div>
      </div>

      <main className="result">
        <h1>main</h1>
      </main>

      <Footer>
        <ul>
          <li>
            <a
              href="https://support.google.com/websearch/?p=ws_results_help&hl=en-ID&fg=1"
              className="button"
            >
              Help
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/search?q=tesla&safe=strict&ei=x6x3YLPHBcDhz7sP7-uRsAs&oq=tesla&gs_lcp=Cgdnd3Mtd2l6EAxQAFgAYLn3igFoAHACeACAAX6IAX6SAQMwLjGYAQCqAQdnd3Mtd2l6wAEB&sclient=gws-wiz&ved=0ahUKEwjzxoPBof_vAhXA8HMBHe91BLYQ4dUDCA4#"
              className="button"
            >
              Send feedback
            </a>
          </li>
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
        </ul>
      </Footer>
    </div>
  );
};

export default SearchResult;
