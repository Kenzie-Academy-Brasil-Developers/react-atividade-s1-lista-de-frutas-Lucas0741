import "./App.css";
import { useState } from "react";
import Render from "./components/Render/index.jsx";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  function filterRedFruits(list) {
    const filteredItems = list.filter((item) => {
      return item.color == "red";
    });
    setFruits(filteredItems);
  }

  const totalValue = fruits.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );

  return (
    <div className="App">
      <header className="App-header">
        <div className="Total-price">Preço Total = {totalValue}</div>
        <Render list={fruits}></Render>
        <button onClick={() => filterRedFruits(fruits)}>
          Mostrar Frutas Vermelhas
        </button>
      </header>
    </div>
  );
}

export default App;
