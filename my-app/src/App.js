import React, { useState } from 'react'
import Products from './Components/Products/product';
import Header from './Components/Layouts/header'
import Subheader from './Components/Layouts/subHeader'


const App=()=>{
  const [cartItems,setCartItems]=useState(0);
  
  const handleAddItems=()=>{
    setCartItems(cartItems+1)
  }

  const handleRemoveItems=()=>{
    setCartItems(cartItems-1)
  }

  return (
    <div>
      <Header count={cartItems}/>
      <Subheader/>
      <Products onAddItems={handleAddItems} onRemoveItems={handleRemoveItems}/>
    </div>
  )
}

export default App;
