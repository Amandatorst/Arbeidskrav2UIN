function ShoppingList() {
  return (
    <form>
      <h1>Handleliste</h1>
      
      <label htmlFor="vare">Vare </label>
      <input type="text" id="vare"></input>

      <label htmlFor="antall">Antall </label>
      <input type="number" id="antall" min="1"></input>


      <input type="submit" value="Legg til vare" id="send"></input>
    </form>
  )
}

export default ShoppingList