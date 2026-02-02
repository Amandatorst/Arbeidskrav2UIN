import ShoppingList from "./components/ShoppingList.jsx"
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Handleliste</h1>
      <ShoppingList />
    </main>
  )
}

export default App
