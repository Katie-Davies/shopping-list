import { useState } from 'react'

function ShoppingList() {
  const [list, setList] = useState({
    leftToBuy: ['chocolate', 'teabags', 'bread', 'milk', 'bananas'],
    rightInCupboard: ['coffee', 'sugar', 'jam', 'paper towels'],
  })

  return (
    <>
      <section className="container">
        <section className="listcontainer">
          <ul>
            {list.leftToBuy.map((shoppingItem) => (
              <li key={shoppingItem}>
                {shoppingItem}
                <button>Check</button>
              </li>
            ))}
          </ul>

          <ul>
            {list.rightInCupboard.map((shoppingItem) => (
              <li key={shoppingItem}>
                {shoppingItem}
                <button>run out</button>
              </li>
            ))}
          </ul>
        </section>
        <section className="cart">
          <img src="client/images/shopping-cart.png" alt="shopping cart"></img>
        </section>
      </section>
    </>
  )
}

export default ShoppingList
