import React, { useState } from 'react'
import Products from './Components/Products/product';
import Header from './Components/Layouts/header'
import Subheader from './Components/Layouts/subHeader'


const App=()=>{
  const [cartItems,setCartItems]=useState([]);

  const [eventQueue,setEventQueue]=useState({
    id:"",
    type:""
  })
  
  const handleAddItems=item=>{
    let items=[...cartItems]
    let index=items.findIndex(i=>i.id===item.id)
    if(index>-1){
      items[index]=item
    }
    else{
      items.push(item)
    }
    setCartItems([...items])
  }
  

  const handleRemoveItems=item=>{
    let items=[...cartItems]
    let index=items.findIndex(i=>i.id===item.id)
    if(items[index].quantity===0){
      items.splice(index,1)
    }
    else{
      items[index]=item
    }
    setCartItems([...items])
  }

  // type==-1 decrease 
  // type==1 increase
  const handleEventQueue=(id,type)=>{
         setEventQueue({
          id,
          type
         })   
  }

  return (
    <div>
      <Header count={cartItems.length} items={cartItems} onHandleEvent={handleEventQueue}/>
      <Subheader/>
      <Products onAddItems={handleAddItems} onRemoveItems={handleRemoveItems} eventState={eventQueue}/>
    </div>
  )
}

export default App;
