import AddToCardIcon from "../assests/add_cart.svg"
import image from "../assests/logo192.png"
import { useState } from "react"
const ListItem = ({ data }) => {
     console.log(data);

     const [counter, setCounter] = useState(0);

     const increaseCounerByOne = () => {
          setCounter(counter + 1);
     }

     const decreaseCounterByOne = () => {
          if (counter <= 0) return;
          setCounter(counter - 1);
     }

     
     return (
          <div className={"item-card"}>
               <img className={"img-fluid"} src={image} alt="{data.title}" />
               <div className={"item-card__information"}>
                    <div>
                         <span>{data.discountedPrice}</span>
                         <small>
                              <strike>{data.price}</strike>
                         </small>
                    </div>
                    <div className="title">
                         <h3>{data.title}</h3>
                    </div>
               </div>
               {
                    (counter <= 0) ?
                         <button className={"cart-add"} onClick={increaseCounerByOne}>
                              <span>Add To Cart</span>
                              <img src={AddToCardIcon} alt="Cart Icon" />
                         </button>
                         :
                         <div className="cart-addon">
                              <button onClick={decreaseCounterByOne}><span>-</span></button>
                              <span className="{counter}">{counter}</span>
                              <button onClick={increaseCounerByOne}><span>+</span></button>
                         </div>

               }
          </div>
     )
}
export default ListItem