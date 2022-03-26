import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  const onAdd = (quantity) => {
    if(quantity > 0){
      alert("La cantidad seleccionada es "+quantity)
    }
  }
  return (
    <div className="App">
        <ItemListContainer greetings={"Listado de Productos"}></ItemListContainer>
    </div>
  );
}

export default App;
