import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from 'components/SearchBar';
import UserProfile from 'components/UserProfile';
import SearchIcon from '@material-ui/icons/Search';
import Footer from 'components/Footer';
import './index.css';
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
          <UserProfile />
        </div>
      </nav>

      <div className="searchResult__navigation">
        <div className="container">
          <ul>
            <li className="active">
              <svg focusable="false" viewBox="0 0 24 24">
                <path
                  fill="#34a853"
                  d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"
                ></path>
                <path
                  fill="#ea4335"
                  d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
                ></path>
                <path
                  fill="#fbbc04"
                  d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
                ></path>
                <path
                  fill="#4285f4"
                  d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
                ></path>
              </svg>
              All
            </li>
            <li>
              <svg focusable="false" viewBox="0 0 24 24">
                <path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"></path>
              </svg>
              News
            </li>
            <li>
              <svg focusable="false" viewBox="0 0 24 24">
                <path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"></path>
              </svg>
              Images
            </li>
            <li>
              <svg focusable="false" viewBox="0 0 24 24">
                <path d="M21.11 2.89A3.02 3.02 0 0 0 18.95 2h-5.8c-.81 0-1.58.31-2.16.89L7.25 6.63 2.9 10.98a3.06 3.06 0 0 0 0 4.32l5.79 5.8a3.05 3.05 0 0 0 4.32.01l8.09-8.1c.58-.58.9-1.34.9-2.16v-5.8c0-.81-.32-1.59-.89-2.16zM20 10.85c0 .28-.12.54-.32.74l-3.73 3.74-4.36 4.36c-.41.41-1.08.41-1.49 0l-2.89-2.9-2.9-2.9a1.06 1.06 0 0 1 0-1.49l8.1-8.1c.2-.2.46-.3.74-.3l5.8-.01A1.05 1.05 0 0 1 20 5.05v5.8zM16 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2"></path>
              </svg>
              Shopping
            </li>
            <li>
              <svg focusable="false" viewBox="0 0 24 24">
                <path d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5"></path>
              </svg>
              Videos
            </li>
            <li>
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
              More
            </li>
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
