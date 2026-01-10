import React, { useContext } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FavListContext } from '../context/FavContext';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {

  const {favList,cartList,addFavList,addcartList}= useContext(FavListContext)
  const inFavList = favList.some((m)=>m.id===product.id)
  const inCartList = cartList.some((m)=>m.id===product.id)

  function openProduct(product){
    window.open(`products/${product.id}`,"_blank")
  };

  return (
    <div key={product.id} className='m-2 p-4 border-2 border-black rounded-lg hover:shadow-lg hover:scale-105 relative'>
        <img src={product.image} alt={product.name} className=' text-center w-48 h-48 mx-auto' />
        <button className='font-bold mt-2 hover:underline cursor-pointer' onClick={()=>openProduct(product)}>{product.name}</button>
        <h3>Ratings : {product.rating.stars}</h3> 
        <h3>Price : ₹{product.priceCents}</h3>
        <button className='bg-pink-200 rounded-full p-2 absolute top-2 right-2' onClick={()=>addFavList(product)}> 
          { inFavList? <FaHeart/>: <FaRegHeart/> }
        </button>
        <button className='bg-orange-300 px-2 py-2 m-2 rounded-xl' onClick={()=>addcartList(product)}> 
          { inCartList ?"Remove from Cart":"Add to Cart"}
          </button>
    </div>
  )
}

export default ProductCard;