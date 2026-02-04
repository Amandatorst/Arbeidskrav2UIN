import ShoppingList from "./components/ShoppingList.jsx"
import ShoppingItem from "./components/ShoppingItem.jsx"

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <ShoppingList />
      <ShoppingItem />
    </main>
  )
}

export default App
