import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/Navbar"
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from './context/CartContext'

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <NavBar name="Tienda Coder" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ItemListContainer greetings={"Listado de Productos"} />}></Route>
            <Route path="/product/:productId" element={<ItemDetail />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
