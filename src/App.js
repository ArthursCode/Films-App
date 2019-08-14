import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Search from './components/Search/Search';
import SearchResult from './components/Search/SearchResult';
import Content from './components/Content/Content';

function App() {
  return (
      <Router>
          <div className="App">
            <Search />
            <div className="Flex">
                <Route path="/search/:id" component={SearchResult} />
                <Route path="/search/:id/:id" component={Content} />
            </div>
          </div>
      </Router>
  );
}

export default App;
