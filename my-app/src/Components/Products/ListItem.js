import AddToCardIcon from "../../assests/add_cart.svg"
import image from "../../assests/logo192.png"
import { useState } from "react"
import Modal from "../UI/Modal"
const ListItem = ({ data, updateItemTitle }) => {
     console.log(data);

     const [counter, setCounter] = useState(0);
     const [showModal, setShowModal] = useState(false)

     const increaseCounerByOne = () => {
          setCounter(counter + 1);
     }

     const decreaseCounterByOne = () => {
          if (counter <= 0) return;
          setCounter(counter - 1);
     }

     const handleModal=()=>{
          setShowModal(previousValue=>!previousValue)
     }


     return (
          <>
               <div onClick={handleModal} className={"item-card"}>
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
                         <button onClick={() => updateItemTitle(data.id)}>Update The Title</button>
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
               {showModal && <Modal />}
          </>
     )
}
export default ListItem