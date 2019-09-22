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
      <HomePage />
      <LoginPage />
      <SignUpPage />
      <Navigation />

      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
