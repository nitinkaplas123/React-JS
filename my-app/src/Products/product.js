import { useState } from "react"
import ListItem from "../Components/ListItem"

const Products = () => {
    const [items,setItem]=useState([
        {
            id: 0,
            discountedPrice: 340,
            price: 450,
            title: 'Title of the Item 1',
            thumbnail: "logo192.png"
        },
        {
            id: 1,
            discountedPrice: 150,
            price: 250,
            title: 'Title of the Item 2',
            thumbnail: "logo192.png"
        },
        {
            id: 2,
            discountedPrice: 550,
            price: 650,
            title: 'Title of the Item 3',
            thumbnail: "logo192.png"
        }
    ])
    return (
        <div className="product-list">
            <div className="product-list--wrapper">
                {/* <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem>
                <ListItem data={items[2]}></ListItem> */}
                {
                   items.map(item=>{
                     console.log(item);
                     return (<ListItem key={item.id} data={item}/>)
                   })
                }
            </div>
        </div>
    )
}
export default Products