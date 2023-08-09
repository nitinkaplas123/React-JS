import image from "../../assests/logo192.png"

const CartItems = ({data,onEmitDecreaseItem,onEmitIncreaseItem}) => {
    console.log(data.thumbnail);
    return (
        <div className="checkout-modal_list-item">
            <div className="img-wrap">
                <img src={data.thumbnail} className="img-fluid" alt={data.title}/>
            </div>
            <div className="information">
                <div>
                    <h4>{data.title}</h4>
                    <div className="pricing">
                        <span>{data.discountedPrice}</span>
                        <small>
                            <strike>{data.price}</strike>
                        </small>
                    </div>
                </div>
                <div className="cart-addon cart-addon__modal">
                    <button onClick={()=>onEmitDecreaseItem(data.id)}>-</button>
                    <span className="counter">{data.quantity}</span>
                    <button onClick={()=>onEmitIncreaseItem(data.id)}>+</button>
                </div>
            </div>
        </div>
    )
}
export default CartItems