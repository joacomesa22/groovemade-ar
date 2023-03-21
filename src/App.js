import "./css/index.css";
import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Error from "./components/Error";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/CartItems/CartItems";
import { ShopContextProvider } from "./context/ShopContext";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/shop" exact element={<Shop />} />
            <Route path="/category/:id" exact element={<Shop />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/cartwidget" exact element={<CartWidget />} />
            <Route path="/*" exact element={<Error />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
