import { useEffect, useState } from "react"
import ListItem from "./ListItem"
import axios from 'axios'
import Loader from "../UI/Loader"
const Products = ({onAddItems,onRemoveItems,eventState}) => {
    const [items, setItem] = useState([])

    const [loader,setLoader]=useState(true)
    
    useEffect(() => {
        async function fetchItem() {
            try {
                const response = await axios.get('https://react-js-e7d8a-default-rtdb.firebaseio.com/items.json')
                const data = response.data;
                console.log(data)
                const tranformData = data.map((item, index) => {
                    return {
                        ...item,
                        quantity:0,
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
    

    useEffect(()=>{
      if(eventState.id>-1){
        if(eventState.type===1){
            handleAddItem(eventState.id)
        }
        else if(eventState.type===-1){
            handleRemoveItem(eventState.id)
        }
      }
    },[eventState])


    const updateItemTitle=async(itemId)=>{
        // console.log(`Item id is:${itemId}`)
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

    const handleAddItem=id=>{
        let data=[...items];
        let index=data.findIndex(i=>i.id===id)
        data[index].quantity+=1
        setItem([...data])
        onAddItems(data[index]);
    }

    const handleRemoveItem=id=>{
        let data=[...items];
        let index=data.findIndex(i=>i.id===id)
        if(data[index].quantity!==0){
            data[index].quantity-=1
            setItem([...data])
            onRemoveItems(data[index]);
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
                        return (<ListItem onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item} updateItemTitle={updateItemTitle}/>)
                    })
                }
            </div>
        </div>
        {loader && <Loader/>}
        </>
    )
}
export default Products