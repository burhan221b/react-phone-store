import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// router
import { Switch, Route } from 'react-router-dom';

// Components
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductsList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Defaults from "./components/Defaults";
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Exclude navbar so it can be used on every page */}
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList}></Route>
          <Route path='/details' component={Details}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route component={Defaults}></Route>
        </Switch>
        <Modal />

      </React.Fragment>
    );
  }
}

export default App;
