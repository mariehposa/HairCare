import React from 'react';
import './App.css';
import HomePage from './components/Homepage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <HomePage />
      <LoginPage />
      <SignUpPage />
      <Navigation />
    </div>
  );
}

export default App;
