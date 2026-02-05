import { useState } from "react"
import ShoppingList from "./components/ShoppingList"
import ShoppingItem from "./components/ShoppingItem"
import AddForm from "./components/AddForm"
import "./App.css"

function App() {
  const [items, setItems] = useState([
  { id: 1, name: "Egg", amount: 1, checked: true },
  { id: 2, name: "Sukker", amount: 1, checked: false },
  { id: 3, name: "Melk", amount: 2, checked: false },
])

  function addItem(newItem) {
  setItems(items => [
    {
      id: crypto.randomUUID(),
      ...newItem,
      checked: false,   
    },
    ...items,
  ])
}


function changeAmount(id, newAmount) {
  setItems(items =>
    items.map(item =>
      item.id === id
        ? { ...item, amount: newAmount }
        : item
    )
  )
}

function toggleChecked(id) {
  setItems(items =>
    items.map(item =>
      item.id === id
        ? { ...item, checked: !item.checked }
        : item
    )
  )
}


  return (
    <main>
      <ShoppingList onAddItem={addItem} />
      <ShoppingItem items={items} onChangeAmount={changeAmount} onToggleChecked={toggleChecked} />
    </main>
  )
}

export default App

// Brukte notater fra timen, arbeidskrav fra innføring i programmering, og lms webtricks til hjelp. 
// Laget kode som fikk handlelisten til å se lik ut som på eksempelbildet,
// la til ekstra css for å legge til en mørkere farge når man "hovrer" over feltene og knappen. 

// For AddForm funksjonen prøvde jeg å se på notatene fra forelesningene om todo siden, men fikk ikke koden til å fungere når jeg prøde meg frem. 
// Ble derfor nødt til å ta i bruk chatGPT for denne funksjonen. 
// Kode til samtale med chatgpt for hjelp til addform funksjonen til slutt: https://chatgpt.com/share/6983d65c-0e28-8004-bac2-9272e0742537

// For å få funksjonen til å fungere måtte jeg skifte oppsettet på alle filene mine :(
// Heldigvis var mye av koden jeg hadde laget riktig, bare plassert litt feil
// Se koden før og etter i historien på koden i github repositoryet mitt :)

// Leste gjennom koden og fikset småfeil ut ifra egne notater, kode fra timen, lms webtricks, og søk på nettet:  
// AI gjorde at man ikke kunne endre på antall og om varen var avhuket så fant ut at jeg måtte sette inn onChange 
// https://www.geeksforgeeks.org/reactjs/react-onchange-event/

// La til required for å få opp melding om input feltene ikke er fyllt ut


