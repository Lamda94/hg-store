import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";
import Products from './components/productsList'
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <ItemList msj={"Welcome to HG Store"} />
      <Products/>
    </div>
  );
}

export default App;
