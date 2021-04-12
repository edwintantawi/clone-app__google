import Home from 'pages/Home';
import SearchResult from 'pages/SearchResult';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={SearchResult} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
