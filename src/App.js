<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
=======
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
>>>>>>> Stashed changes
import NavBar from './components/NavBar';
import './App.css';
import Home from './Views/Home';
/* import About from './Views/About';*/
import Cart from './Views/Cart';
import Store from './Views/Store';
import FilterProduct from './Views/FilterProduct';
import ProductDetails from './Views/ProductDetails';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="container-fluid" style={{ padding: 0 }}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Store" component={Store} />
            <Route path="/cart" component={Cart} />
            <Route path="/category/:id" component={FilterProduct} />
            <Route path="/detail/:id" component={ProductDetails} />
          </Switch>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
