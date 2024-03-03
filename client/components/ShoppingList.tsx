import { useState } from 'react'

function ShoppingList() {
  const [list, setList] = useState({
    leftToBuy: ['chocolate', 'teabags', 'bread', 'milk', 'bananas'],
    rightInCupboard: ['coffee', 'sugar', 'jam', 'paper towels'],
  })

  function leftClick(shoppingItem: string): void {
    //deconstruct the arrays
    const { leftToBuy, rightInCupboard } = list

    setList({
      //remove item from left list
      leftToBuy: leftToBuy.filter((listItem) => listItem !== shoppingItem),
      //add to right list
      rightInCupboard: [...rightInCupboard, shoppingItem],
    })
  }

  function rightClick(shoppingItem: string): void {
    //deconstruct the arrays
    const { leftToBuy, rightInCupboard } = list

    setList({
      //remove item from right list
      rightInCupboard: rightInCupboard.filter(
        (listItem) => listItem !== shoppingItem
      ),
      //add to left list
      leftToBuy: [...leftToBuy, shoppingItem],
    })
  }

  return (
    <>
      <section className="container">
        <section className="listcontainer">
          <ul>
            <h2>To buy</h2>
            {list.leftToBuy.map((shoppingItem) => (
              <li key={shoppingItem}>
                {shoppingItem}
                <button
                  onClick={() => {
                    leftClick(shoppingItem)
                  }}
                >
                  Check
                </button>
              </li>
            ))}
          </ul>

          <ul>
            <h2>In the Cart</h2>
            {list.rightInCupboard.map((shoppingItem) => (
              <li key={shoppingItem}>
                {shoppingItem}
                <button
                  onClick={() => {
                    rightClick(shoppingItem)
                  }}
                >
                  run out
                </button>
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
