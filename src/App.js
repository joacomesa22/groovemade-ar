import "./css/index.css";
import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./components/Error/Error";
import Cart from "./pages/Cart/CartItems/CartItems";
import { ShopContextProvider } from "./context/ShopContext";
import ItemDetailContainer from "./pages/Shop/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./pages/Shop/ItemListContainer/ItemListContainer";
import Checkout from "./pages/Cart/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/shop" exact element={<ItemListContainer />} />
            <Route
              path="/shop/:category"
              exact
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" exact element={<ItemDetailContainer />} />
            <Route path="/checkout" exact element={<Checkout />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/cartwidget" exact element={<CartWidget />} />
            <Route path="/*" exact element={<Error />} />
          </Routes>
        </Router>
        <ToastContainer />
      </ShopContextProvider>
    </>
  );
}

export default App;
