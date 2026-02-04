import { useState } from "react"
import ShoppingList from "./components/ShoppingList"
import ShoppingItem from "./components/ShoppingItem"
import AddForm from "./components/AddForm"
import "./App.css"

function App() {
  const [items, setItems] = useState([
    { name: "Egg", amount: 1, defaultchecked: true },
    { name: "Sukker", amount: 1, checked: false },
    { name: "Melk", amount: 2, checked: false },
  ])

  function addItem(newItem) {
    setItems([newItem, ...items]) // 👈 legger øverst
  }

  return (
    <main>
      <ShoppingList onAddItem={addItem} />
      <ShoppingItem items={items} />
    </main>
  )
}

export default App

// Brukte notater fra timen og lms webtricks til hjelp
// kode til samtale med chatgpt for hjelp til addform funksjonen til slutt: https://chatgpt.com/share/6983d65c-0e28-8004-bac2-9272e0742537
// For å få funksjonen til å fungere måtte jeg skifte opsettet på alle filene mine :(
// Heldigvis var mye av koden jeg hadde laget riktig, bare plassert litt feil
// Se koden før og etter i historien på koden i github repositoryet mitt :)
