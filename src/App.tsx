import React from 'react';
import { Provider } from 'react-redux'

import './App.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Content />
      </div>
    </Provider>
  );
}

export default App;
