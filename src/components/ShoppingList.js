import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter"

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  return <Filter handleChange = {handleCategoryChange} stateVar={selectedCategory} itemsArr={items} />
}

export default ShoppingList;
