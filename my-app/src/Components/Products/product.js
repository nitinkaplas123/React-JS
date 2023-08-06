import { useEffect, useState } from "react"
import ListItem from "./ListItem"
import axios from 'axios'
import Loader from "../UI/Loader"
const Products = () => {
    const [items, setItem] = useState([])

    const [loader,setLoader]=useState(true)

    useEffect(() => {
        async function fetchItem() {
            try {
                const response = await axios.get('https://react-js-e7d8a-default-rtdb.firebaseio.com/items.json')
                const data = response.data;
                const tranformData = data.map((item, index) => {
                    return {
                        ...item,
                        id: index
                    }
                })
                // setLoader(false)
                setItem(tranformData)
            }

            catch (error) {
                // setLoader(false)
                console.log("error:",error);
                alert("some error occured")
            } 
            finally{
              setLoader(false)
            }
        }
        fetchItem()
    }, [])

    const updateItemTitle=async(itemId)=>{
        console.log(`Item id is:${itemId}`)
        try{
            let title=`update the title #item-${itemId}`
            await axios.patch(`https://react-js-e7d8a-default-rtdb.firebaseio.com/items/${itemId}.json`,{
            title:title
          })
          let data=[...items]
          let index=data.findIndex(e=>e.id===itemId)
          data[index]['title']=title;
          setItem(data);
        }
        catch(error){
            console.log("error is detected!!")
        }
    }

    return (
        <>
        <div className="product-list">
            <div className="product-list--wrapper">
                {/* <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem>
                <ListItem data={items[2]}></ListItem> */}
                {
                    items.map(item => {
                        console.log(item);
                        return (<ListItem key={item.id} data={item} updateItemTitle={updateItemTitle}/>)
                    })
                }
            </div>
        </div>
        {loader && <Loader/>}
        </>
    )
}
export default Products