import Main from './components/MainComponent';
import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';


class App extends Component {

  render() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Main />
      </div>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
