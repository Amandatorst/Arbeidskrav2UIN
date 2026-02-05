import { useState } from "react"

function AddForm({ onAddItem }) {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()

    if (!name) return

    onAddItem({
      name: name,
      amount: amount,
      checked: true,
    })

    setName("")
    setAmount(1)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Handleliste</h1>

      <label htmlFor="vare">Vare</label>
      <input
        type="text"
        id="vare"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="antall">Antall</label>
      <input
        type="number"
        id="antall"
        min="1"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        required
      />

      <input type="submit" value="Legg til vare" />
    </form>
  )
}

export default AddForm