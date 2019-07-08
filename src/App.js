import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dash from './Dash'
import Store from './Store'

function App() {
  return (
    <div className="App">
      <Store>
        <Dash />
      </Store>
      
    </div>
  );
}

export default App;
