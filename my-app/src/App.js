import React from 'react'
import Products from './Components/Products/product';
import Header from './Components/Layouts/header'
import Subheader from './Components/Layouts/subHeader'


const App=()=>{
  return (
    <div>
      <Header/>
      <Subheader/>
      <Products/>
    </div>
  )
}

export default App;
