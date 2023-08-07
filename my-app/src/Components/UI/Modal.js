import ReactDom from "react-dom"
import { BackDrop } from "./Loader"


const Modal = ({onClose,children}) => {
    return (
        <>
            {
                ReactDom.createPortal(
                    <>
                        <BackDrop onClose={onClose}/>
                        <div className="modal">
                            <button type="close" onClick={onClose}>X</button>
                            <div className="content">{children}</div>
                        </div>
                    </>
                    ,
                    document.getElementById("modal-root")
                )
            }
        </>
    )
}
export default Modal


