import React, { useContext } from 'react'
import { FavListContext } from '../context/FavContext';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CartCard = ({product}) => {

  const backendurl= import.meta.env.VITE_BACKEND_URL;
    const {cartList,addcartList,handleMyOrders,loggedInUser} = useContext(FavListContext)
    const inCartList = cartList.some((m)=>m.id===product.id)
    const navigate = useNavigate();
//console.log(loggedInUser)
  const handleBuyNow =async (amount)=>{

    if (loggedInUser.length==0){
        navigate("/login")
    }
    else{
       //console.log(amount)
    const data = await axios.post(`${backendurl}/api/payment/buynow` , {price:amount});
    initiatePayment(data)
    }
  }

  const initiatePayment =(orderData)=>{
    //console.log(orderData.data.data);
    const options ={
      key:"rzp_test_S1ekeWRYJe5KOA",
      amount:orderData.data.data.amount,
      currency:orderData.data.data.currency,
      description: "Test payment method",
      order_id:orderData.data.data.id,
      handler: async (response)=>{
        //console.log(response)
        await axios.post(`${backendurl}/api/payment/verify`,response).then(data=>{
          if (data.status===200){
            alert('payment verified...')
            handleMyOrders(product,orderData.data.data.id)
            addcartList(product)
          }
          else{
            alert('Payment Failed...')
          }
        })
        .catch(err=>console.log(err))
      },
      theme:{
        color:"#3399cc"
      },
    };
    const razorpay_popup = new window.Razorpay(options);
    //console.log(options)
    razorpay_popup.open()
  }

  return (
    <div className='flex flex-wrap justify-around items-center m-2 p-4 border-2 border-black rounded-lg'>
          <img src={product.image} alt={product.name} className=' text-center w-24 h-24' />
          <div>
            <h3 className='font-bold mt-2'>{product.name}</h3>
            <h3>Ratings : {product.rating.stars}</h3> 
            <button className='bg-orange-300 px-2 py-2 m-2 rounded-xl' onClick={()=>addcartList(product)}> 
            {inCartList? "Remove from Cart":"Added to cart"}
            </button>
            <button className='bg-orange-300 px-4 py-2 rounded-xl' onClick={()=>handleBuyNow(product.priceCents)}>Buy Now</button>
          </div>
          <div>
            <h3>Price : ₹{product.priceCents}</h3>
          </div>
    </div>
  )
}

export default CartCard;