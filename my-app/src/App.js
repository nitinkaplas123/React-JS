import React from 'react'
import Products from './Products/product';
import Header from './Layouts/header';
import Subheader from './Layouts/subHeader';


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
