import { createContext, useEffect, useState } from "react";
import axios from 'axios'


export const FavListContext = createContext();

export const FavListProvider = ({children})=>{

    const [productList,setProductList]=useState([])
    const [category,setCategory]=useState("Fashion & Apparel")
    const [favList,setFavList]=useState([]);
    const [cartList,setCartList]=useState([]);
    const [loggedInUser,setLoggedInUser]=useState("")
    const [myOrders,setMyOrders]=useState([])

    const backendurl= import.meta.env.VITE_BACKEND_URL;

    console.log("User logged :",loggedInUser)

    useEffect(()=>{
        // console.log(`${backendurl}/products`)
      axios.get(`${backendurl}/products`)
     .then(data=>{
        //console.log(data)
      const filteredList = data.data.filter(product=>product.category == category)
      setProductList(filteredList)
    // console.log(data)
    })
    .catch(()=>console.log("error while getting product list"))
  },[category])


  const handleCatogery = (item)=>{
    // console.log(item)
    setCategory(item)
  }


    const addFavList = (item)=>{
        // console.log(item)
        const index = favList.findIndex(m=>m.id===item.id);

        // console.log(index)

        if (index === -1){
            setFavList([...favList,item]);
        }
        else{
            setFavList([...favList.slice(0,index),...favList.slice(index+1)]);
        }
    } 

    const addcartList = (item)=>{

        // console.log(item,cartList)

        const index= cartList.findIndex(m=>m.id===item.id)

        // console.log(index)

        if(index=== -1){
            setCartList([...cartList,item])
        }
        else{
            setCartList([...cartList.slice(0,index),...cartList.slice(index+1)]);
        }
    }


    const handleMyOrders =(product,order_id)=>{

        //console.log(product,order_id)

        const {id,name,image} = product
        
        const myOrderItem ={
            "id":id,
            "name":name,
            "image":image,
            "order_id":order_id
        }
        console.log(myOrderItem)

        setMyOrders((prevorder)=>
            [...prevorder,myOrderItem]
        )
    }
//console.log(myOrders)


    //console.log(favList)

    return(
        <FavListContext.Provider value={{productList,favList,addFavList,cartList,addcartList,category,handleCatogery,setLoggedInUser,loggedInUser,handleMyOrders,myOrders}}>
            {children}
        </FavListContext.Provider>
    )
}