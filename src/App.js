import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import Home from './components/Home';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
        <Router>
          <Page />
          <Routes>
            <Route path="/" ></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
