import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import heroimage from '../assets/flat-supermarket-banner.jpg'
import categories from '../data'
import ProductCard from './ProductCard';
import { useContext } from 'react';
import { FavListContext } from '../context/FavContext';

const Home = () => {
  //console.log(category)
  const {productList,handleCatogery} =useContext(FavListContext)
  
  return (
    <>
    <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-evenly p-3 border-b'>
        {categories.map((data,index)=>(
            <div key={index} className='flex gap-2 items-center hover:scale-110'>
              <Link to={`/products`} onClick={()=>handleCatogery(data.name)} >{data.name} </Link> 
              <FaArrowRight/>
            </div>
        ))}
    </div>
    <div>
        <img src={heroimage} alt="" />
    </div>
    <div className='hidden md:flex justify-evenly p-3 border-b'>
        {categories.map((data,index)=>(
                <div key={index} className='text-center m-5' onClick={()=>{handleCatogery(data.name)}} > 
                    <img src={data.image} alt={data.image} className=' border rounded-full shadow-2xl hover:scale-110' /> 
                        <h4 className='font-bold mt-3'>{data.name} </h4>
                    </div> 
        ))}
    </div>

        <h2 className='font-bold font-3xl p-4'>Popular Products</h2>
        <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-2 m-5'>
        {
            
            productList.map((data,index)=>(
                <ProductCard product={data} key={index}/>
            ))
        }
        </div>
        
    </>
  )
}

export default Home;