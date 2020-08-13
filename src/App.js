import React from 'react';
import Header from './component/Header';
import Home from './page/Home';
import Footer from './component/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <Home />
          </Route>
        </Switch>
      </Router>
      


      <Footer />
    </div>
  );
}

export default App;
