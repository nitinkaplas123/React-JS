import  ReactDom  from "react-dom"

export const BackDrop=()=>{
    return (
        <div className="loader-overlay"></div>
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