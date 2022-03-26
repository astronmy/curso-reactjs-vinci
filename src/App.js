import ItemCount from "./components/ItemCount/ItemCount"

function App() {
  const onAdd = (quantity) => {
    console.log('La cantidad es ', quantity)
  }
  return (
    <div className="App">
      <div className="container">
        <ItemCount className="item-counter" initial={0} stock={20} onAdd={onAdd}></ItemCount>
      </div>
    </div>
  );
}

export default App;
