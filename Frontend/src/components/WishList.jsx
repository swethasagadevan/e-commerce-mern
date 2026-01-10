import React, { useContext } from 'react'
import { FavListContext } from '../context/FavContext';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const WishList = () => {

  const {favList} =useContext(FavListContext);


  return (
    
   <>
   <div className='p-5'>
    <Link to ="/" className='bg-orange-400 p-2 text-white rounded-lg'> Continue shopping.😃</Link>
    </div>
    {favList.length==0 ? <div className='text-center p-5'>Wishlist is Empty.</div> :
    <>
    <div className='flex flex-wrap m-5'>

        {
        favList.map((data,index)=>(
          <ProductCard product={data} key={index}/>
        ))
        }
      
    </div>
    </>}
    
   </>
  )
}

export default WishList;
