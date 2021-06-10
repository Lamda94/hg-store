import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemList msj={"Welcome to HG Store"} />
    </>
  );
}

export default App;
