import React from 'react';
// import logo from './logo.svg';
import './App.css';
import lock from './img/lock.jpg'
import {Helmet} from 'react-helmet'
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Laziem's Portfolio</title>
      </Helmet>
      <h1>My portfolio</h1>
      <h2>Author: Muhammad Laziem Shafie</h2>
      <img src={lock} alt="lock" width="500px"></img>
    </div>
  );
}

export default App;
