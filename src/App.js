import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
    </div>
  );
}

export default App;
