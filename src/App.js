import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/Navbar"

function App() {
  const onAdd = (quantity) => {
    if(quantity > 0){
      alert("La cantidad seleccionada es "+quantity)
    }
  }
  return (
    <div className="App">
        <NavBar name="Tienda Coder"/>
        <ItemListContainer greetings={"Listado de Productos"}></ItemListContainer>
    </div>
  );
}

export default App;
