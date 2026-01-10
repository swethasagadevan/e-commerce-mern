
import { useContext } from 'react';
import asideimage_one from '../assets/products-aside1.jpg'
import asideimage_two from '../assets/products-aside2.jpg'
import categories from '../data';
import ProductCard from './ProductCard';
import { FavListContext } from '../context/FavContext';

const Products = () => {

  const {productList,handleCatogery} = useContext(FavListContext)
  
  //console.log(productList,category)
  
  return (
    <>
    
    <div className='md:grid grid-cols-5'>
          <div className='col-span-1'>
          <aside className='border-2 flex flex-col gap-5 p-5'>
            <p className='font-bold'>Category</p>
              {categories.map((data,index)=>(
            <div key={index} onClick={()=>handleCatogery(data.name)} className="cursor-pointer border-2 rounded-lg text-center p-2 hover:shadow-lg hover:scale-105 hover:bg-orange-300 "><a>{data.name} </a> </div>
            ))}
          </aside>
          <img src={asideimage_one} alt="discount image" className='hidden md:block'/>
          <img src={asideimage_two} alt="discount image" className='hidden md:block'/>
          </div>

        <div className='border-l-4 m-4 col-span-4'>
          
        <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-2 m-5'>
        {
            
            productList.map((data,index)=>(
                <ProductCard product={data} key={index}/>
            ))
        }
        </div>

    </div>
    </div>
    </>

  )
}

export default Products;