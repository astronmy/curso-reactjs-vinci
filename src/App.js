import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from "./components/NavBar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar name="Tienda Coder" />
        <Routes>
          <Route path="/" element={<ItemListContainer greetings={"Listado de Productos"} />}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Hola Coder'} />} />
          <Route path='/product/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
