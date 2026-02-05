function ShoppingItem({ items, onChangeAmount, onToggleChecked }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => onToggleChecked(item.id)}
          />

          {item.name}

          <input
            type="number"
            min="1"
            value={item.amount}
            onChange={(e) =>
              onChangeAmount(item.id, Number(e.target.value))
            }
          />
        </li>
      ))}
    </ul>
  )
}


export default ShoppingItem