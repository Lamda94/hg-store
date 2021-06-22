import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import Store from './Views/Store';
import FilterProduct from './Views/FilterProduct'
import ProductDetails from './Views/ProductDetails'
function App() {
  return (
    <div className="container-fluid">     
      <Router> 
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Store" component={Store} />
          <Route path="/category/:id" component={FilterProduct} />
          <Route path="/detail/:id" component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
