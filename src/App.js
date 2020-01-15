import React from 'react';
import './App.scss';

import Items from "./components/items/items";

function App() {
  return (
    <div className="App__wrapper">
      <div className="App">
        <Items/>
      </div>
    </div>
  );
}

export default App;
