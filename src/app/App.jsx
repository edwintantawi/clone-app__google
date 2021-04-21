import Home from 'pages/Home';
import SearchResult from 'pages/SearchResult';
import { useStateValue } from 'provider/stateProvider';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './app.css';

const App = () => {
  const [{ term }] = useStateValue();
  return (
    <div className="app">
      <Router basename="#">
        <Switch>
          <Route path="/" exact component={Home} />
          {term == null ? (
            <Redirect from="/search" to="/" />
          ) : (
            <Route path="/search" component={SearchResult} />
          )}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
