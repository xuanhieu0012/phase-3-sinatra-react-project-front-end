
import './App.css';
import { Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Home from "./Home"
import NavBar from "./NavBar"
import About from "./About"
import Cart from "./Cart"


function App() {
  const [page, setPage] =useState("/")

  return (
    <div className="App">
        <NavBar onChangePage={setPage} />
        <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        
    </div>
  );
}

export default App;
