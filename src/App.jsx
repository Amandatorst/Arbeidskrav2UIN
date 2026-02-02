import { handlelisten } from './assets/components/Shoppinglist'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Handleliste</h1>
      <Handlelisten />
    </main>
  )
}

export default App
