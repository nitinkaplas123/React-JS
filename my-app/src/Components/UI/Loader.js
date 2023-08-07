import  ReactDom  from "react-dom"

// blue background when we reload page check there
export const BackDrop=(props)=>{
    const handleClick=()=>{
          if(props.onClose){
            props.onClose();
          }
    }
    return (
        <div onClick={handleClick} className="loader-overlay"></div>
    )
}

const Loader = () => {
    return (
        ReactDom.createPortal(
            <>
            <BackDrop/>
            <div className="loading-dots">
                <div>Loading</div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
            </div>
        </>,
        document.getElementById('loader-root')
        )
    )
}
export default Loader