import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { FavListContext } from '../context/FavContext'

const ProductDetails = () => {
    const {id} =useParams()
    const {productList} =useContext(FavListContext)
    const product = productList.find(p=>p.id===id)
    //console.log(product)

  return (
    <div className='m-10 p-10 flex justify-center items-center gap-10'>
        <img src={product?.image} alt={product?.name} className=' text-center ' />
        <div className=''>
            <h3 className='font-bold mt-2 text-2xl'>{product?.name}</h3>
            <h3>Ratings : {product?.rating.stars}</h3> 
             <h3 className='font-bold'>Price : ₹{product?.priceCents}</h3>
            <button className='bg-orange-300 px-2 py-2 m-2 rounded-xl' onClick={()=>addcartList(product)}> 
            {/* {inCartList? "Remove from Cart":"*/}
            Added to cart
            {/*"} */}
            </button>
            <button className='bg-orange-300 px-4 py-2 rounded-xl' onClick={()=>handleBuyNow(product.priceCents)}>Buy Now</button>
       
            
            <p>{product?.description}</p>
        </div>
    </div>
  )
}

export default ProductDetails;
