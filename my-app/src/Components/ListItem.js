import AddToCardIcon from "../assests/add_cart.svg"
import image from "../assests/logo192.png"
const ListItem=({data})=>{
    console.log(data)
    return (
     <div className={"item-card"}>
          <img className={"img-fluid"} src={image} alt="{data.title}" /> 
          <div className={"item-card__information"}>
               <div>
                    <span>{data.discountPrice}</span>
                    <small>
                         <strike>{data.price}</strike>
                    </small>
               </div>
               <div className="title">
                    <h3>{data.title}</h3>
               </div>
          </div>
          <button className={"cart-add"}>
               <span>Add To Cart</span>
               <img src={AddToCardIcon} alt="Cart Icon"/>
          </button>
     </div>
    )
}
export default ListItem