import React, { useContext } from 'react'
import { FavListContext } from '../context/FavContext';
import { Link } from 'react-router-dom';

const MyOrder = () => {
  const {myOrders} =useContext(FavListContext)
 
//  const myOrders =[{id:"22",
//   image:"https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/maxi-dress.jpg",
//   name:"Women's Floral Maxi Dress",
//   order_id:"order_S251NMnsKGy936"}]

  // console.log(myOrders)
  return (
    <div>
      <div className='p-5'>
    <Link to ="/" className='bg-orange-400 p-2 text-white rounded-lg'> Continue shopping.😃</Link>
   </div>

      {myOrders.map(data=>{ 
        return <div className='m-4 border-2'>
          <div className='p-4'>
            <h3>Order ID : {data.order_id}</h3>
          </div>
          <div className='p-2 flex justify-evenly items-center'>
            <img src={data.image} alt={data.name} className=' text-center w-12' />
            <h3 className='font-bold mt-2'>{data.name}</h3>
          <div>✅ Order Placed</div>
          </div>
        </div>
})}
    </div>
  )
}

export default MyOrder;
