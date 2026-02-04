function ShoppingItem({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <input type="checkbox" defaultChecked={item.unchecked} />
          {item.name}
          <input type="number" defaultValue={item.amount} />
        </li>
      ))}
    </ul>
  )
}

export default ShoppingItem