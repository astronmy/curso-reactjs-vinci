import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/Navbar"
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar name="Tienda Coder" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer greetings={"Listado de Productos"} />}></Route>
          <Route path="/product/:productId" element={<ItemDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
