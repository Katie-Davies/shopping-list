import { useState } from 'react'

function ShoppingList() {
  const [list, setList] = useState({
    leftToBuy: ['chocolate', 'teabags', 'bread', 'milk', 'bananas'],
    rightInCupboard: ['coffee', 'sugar', 'jam', 'paper towels'],
  })
}
