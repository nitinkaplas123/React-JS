import ListItem from "../Components/ListItem"
const Item=[
    {
        id:0,
        discountPrice:340,
        price:450,
        title:'Title of the Item 1',
        thumbnail:"logo192.png"
    },
    {
        id:1,
        discountPrice:150,
        price:250,
        title:'Title of the Item 2',
        thumbnail:"logo192.png"
    },
    {
        id:2,
        discountPrice:550,
        price:650,
        title:'Title of the Item 3',
        thumbnail:"logo192.png"
    }
]
const Products=()=>{
     return (
      <div className="product-list">
         <div className="product-list--wrapper">
            <ListItem data={Item[0]}></ListItem>
            <ListItem data={Item[1]}></ListItem>
            <ListItem data={Item[2]}></ListItem>
         </div>
      </div>
     )
}
export default Products