import React, { useState } from 'react';
import './index.scss';
import io from 'socket.io-client';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';

const App: React.FC = () => {
  const socket = null;
  const connect = (host: string) => {
    const socket = io(host);
    console.log(socket);
  };

  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          {/*<nav>*/}
          {/*  <ul>*/}
          {/*    <li>*/}
          {/*      <Link to="/">Home</Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to="/about">About</Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to="/users">Users</Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</nav>*/}

          <Switch>
            <Route path="/about">
              <h1>about</h1>
            </Route>
            <Route path="/users">
              <h1>users</h1>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      {/*<button onClick={() => connect('localhost:4000')}>Connect to room</button>*/}
    </div>
  );
};

export default App;
