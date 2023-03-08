import logo from "./logo.svg";
import "./css/App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Items"} />
    </>
  );
}

export default App;
