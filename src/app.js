import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      name: "Egg"
    },
    {
      id: 2,
      checked: false,
      name: "Tomato"
    },
    {
      id: 3,
      checked: false,
      name: "Bun"
    },
    {
      id: 4,
      checked: false,
      name: "Cheese"
    },
    {
      id: 5,
      checked: false,
      name: "Potato"
    },
    {
      id: 6,
      checked: false,
      name: "Spinech"
    },
    {
      id: 8,
      checked: false,
      name: "patty"
    },
    {
      id: 7,
      checked: false,
      name: "Sauce"
    },
  ])

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)

    setItems(listItems)
  }

  return (
    <div className="App">

      <Header />
      <main>
        <ul>
          {
            items.map((item) => (
              <li key={item.id}>
                <input type="checkbox" checked={item.checked} onChange={() => { handleCheck(item.id) }} />
                <label style={item.checked ? { textDecoration: 'line-through' } : null}>{item.name} </label>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            ))
          }

        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default App;
