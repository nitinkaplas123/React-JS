import ReactDom from "react-dom"
import { BackDrop } from "./Loader"


const Modal = () => {
    return (
        <>
            {
                ReactDom.createPortal(
                    <>
                        <BackDrop />
                        <div className="modal">
                            Modal Content
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


