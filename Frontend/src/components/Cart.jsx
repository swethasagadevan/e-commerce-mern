import React, { useContext } from 'react'
import { FavListContext } from '../context/FavContext';;
import { Link } from 'react-router-dom';
import CartCard from './CartCard';

const Cart = () => {

  const {cartList} = useContext(FavListContext)
  let total =0

  const subtotal = cartList.map(data=>(data.priceCents))

 for (let i=0;i< subtotal.length;i++){
    total += subtotal[i]
  }

  

  // console.log(total)

  return(
     <>
     <div className='p-5 animate-pulse'>
    <Link to ="/" className='underline text-blue-500'> Continue shopping.😃</Link>
   </div>
   {cartList.length==0? <div className='text-center p-5'>Cart is Empty</div> : <>
   <div className='flex justify-around items-center'>
    <p className='p-5 font-bold text-xl'>Total : {total}</p>
   </div>
    <div className='m-5'>
      { cartList.map((data,index)=>(
        <CartCard product={data} key={index}/>
      ))      
      }
    </div>
    </>}

    
     </>
  )
}

export default Cart;