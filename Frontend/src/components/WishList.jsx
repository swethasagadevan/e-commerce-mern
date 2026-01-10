import React, { useContext } from 'react'
import { FavListContext } from '../context/FavContext';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const WishList = () => {

  const {favList} =useContext(FavListContext);


  return (
    
   <>
   <div>
    <Link to ="/" className='underline text-blue-500 p-5'> Continue shopping.</Link>
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