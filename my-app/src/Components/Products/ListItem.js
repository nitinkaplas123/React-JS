import AddToCardIcon from "../../assests/add_cart.svg"
import image from "../../assests/logo192.png"
import { useState } from "react"
import Modal from "../UI/Modal"
const ListItem = ({ data, updateItemTitle, onAdd, onRemove }) => {


     // const [counter, setCounter] = useState(0);
     const [showModal, setShowModal] = useState(false)

     const increaseCounerByOne = event => {
          event.stopPropagation() // its used to not show the modal when we add or sub the item
          // at add to cart button
          onAdd(data.id)
          // setCounter(counter + 1);
     }

     const decreaseCounterByOne = event => {
          event.stopPropagation()
          // if (counter <= 0) return;
          // if(counter==1){

          // }
          onRemove(data.id);
          // setCounter(counter - 1);
     }

     const handleModal = () => {
          setShowModal(previousValue => !previousValue)
     }

     return (
          <>
               <div onClick={handleModal} className={"item-card"}>
                    <img className={"img-fluid"} src={data.thumbnail} alt={data.title}/>
                    <div className={"item-card__information"}>
                         <div className="{pricing}">
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
                         (data.quantity <= 0) ?
                              <button className={"cart-add"} onClick={increaseCounerByOne}>
                                   <span>Add To Cart</span>
                                   <img src={AddToCardIcon} alt="Cart Icon" />
                              </button>
                              :
                              <div className="cart-addon">
                                   <button onClick={decreaseCounterByOne}><span>-</span></button>
                                   <span className="{counter}">{data.quantity}</span>
                                   <button onClick={increaseCounerByOne}><span>+</span></button>
                              </div>

                    }
               </div>
               {showModal
                    &&
                    <Modal onClose={handleModal} >
                         <div className="item-card__modal">
                              <div className="img-wrap">
                                   <img className="img-fluid" src={data.thumbnail} alt="{data.title}" />
                              </div>
                              <div className="meta">
                                   <h3>{data.title}</h3>
                                   <div className="{pricing}">
                                        <span>{data.discountedPrice}</span>
                                        <small>
                                             <strike>{data.price}</strike>
                                        </small>
                                   </div>
                                   <p>{data.description}</p>
                                   {
                                        (data.quantity <= 0)
                                             ?
                                             <button className={"cart-add cart-add__modal"} onClick={increaseCounerByOne}>
                                                  <span>Add To Cart</span>
                                                  <img src={AddToCardIcon} alt="Cart Icon" />
                                             </button>
                                             :
                                             <div className="cart-addon cart-addon__modal">
                                                  <button onClick={decreaseCounterByOne}><span>-</span></button>
                                                  <span className="{counter}">{data.quantity}</span>
                                                  <button onClick={increaseCounerByOne}><span>+</span></button>
                                             </div>

                                   }
                              </div>
                         </div>
                    </Modal>

               }
          </>
     )
}
export default ListItem