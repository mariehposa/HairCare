import React from 'react';
import './App.css';
import HomePage from './components/Homepage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <LoginPage />
      <SignUpPage />
    </div>
  );
}

export default App;
