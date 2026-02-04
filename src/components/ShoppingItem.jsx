function ShoppingItem() {
  return (
    <ul>
        <li>
            <input type="checkbox" defaultChecked/> 
            Egg
            <input type="number" defaultValue={1}/>
        </li>
        <li>
            <input type="checkbox" />
            Sukker
            <input type="number" defaultValue={1}/>

        </li>
         <li>
            <input type="checkbox" />
            Melk
            <input type="number" defaultValue={2}/>

        </li>
    </ul>
      

  )
}

export default ShoppingItem