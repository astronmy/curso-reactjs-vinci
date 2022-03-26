import ItemCount from "./components/ItemCount/ItemCount"

function App() {
  const onAdd = (quantity) => {
    if(quantity > 0){
      alert("La cantidad seleccionada es "+quantity)
    }
  }
  return (
    <div className="App">
      <div className="container">
      <p> El Stock Disponible es de <em>20</em></p>
        <ItemCount className="item-counter" initial={0} stock={20} onAdd={onAdd}></ItemCount>
      </div>
    </div>
  );
}

export default App;
