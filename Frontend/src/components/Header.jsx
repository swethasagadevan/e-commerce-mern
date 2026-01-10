import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom';
import {FaSearch,FaShoppingCart,FaUserAlt,FaHeart} from 'react-icons/fa'
import { FavListContext } from '../context/FavContext';
import { IoMenu } from 'react-icons/io5';

const Header = () => {

  const {cartList,favList,loggedInUser} = useContext(FavListContext)
  const [menuOpen,setMenuOpen] = useState(false)

  const wishListCount = favList.length;
  const cartCount = cartList.length;
  // console.log(loggedInUser)
  const tagLinks =[
    {title:"Wishlist",icon:<FaHeart/>,productCount:wishListCount,link:"/wishlist"},
    {title:"Cart",icon:<FaShoppingCart/>,productCount:cartCount,link:"/cart"},
    // {title:"",icon:<FaUserAlt/>,productCount:"",link:"/account"},
    
  ]

  function handleMenuBar(){
      setMenuOpen(true)
  }

  function handleMenuClose(){
    setMenuOpen(false)
  }

  return (
    <div className='flex justify-between items-center p-2 border-b sticky bg-white top-0 z-10'>
        <Link to="/" className='text-2xl font-bold'>BUYLO 🛍️ </Link>
        
        
        <div className='hidden lg:flex items-center gap-1'>
          <div className='mx-2'>
                {loggedInUser.length==0?"":`Hi, ${loggedInUser}`}               
          </div>         
          {tagLinks.map((data,index)=>(
            <div key={index} className='flex items-center gap-1 relative right-0 top-0 p-4 hover:scale-105'> 
              
              <Link to={data.link} className='hover:underline'> {data.icon}</Link>
              <p className='absolute top-1 left-0 bg-blue-400 rounded-full px-1'>{data.productCount}</p>
            </div>
          ))}

          {loggedInUser.length==0?<>
          
          <Link to="/login" className='hover:underline p-4'>Login | Register</Link>
          </>:
          <><Link to='/myorders' className='hover:underline p-4'>My Orders</Link>
                <Link to="/login" className='hover:underline p-2 bg-orange-400 m-4 text-white '>Logout</Link></>}
        </div>
        <div className='sm:block lg:hidden' onClick={handleMenuBar}>
          <IoMenu/>
        </div>
        {menuOpen && <div className='absolute left-0 top-0 bg-black text-white h-screen w-1/2 p-3'>
        <p className='text-right' onClick={handleMenuClose}>X</p>
        <div className='mx-2 mb-2'>
                {loggedInUser.length==0?"Hi,Login":`Hi, ${loggedInUser}`}
                {loggedInUser.length==0?<Link to="/login" className='hover:underline p-4'>Login | Register</Link>:
                <Link to="/login" className='hover:underline p-2 bg-white m-4 text-black'>Logout</Link>}
          </div> 
          
          {tagLinks.map((data,index)=>(
            <div key={index} className='flex items-center gap-1 relative right-0 top-0 p-4 hover:underline'>
              <Link to={data.link} onClick={handleMenuClose}>{data.icon} </Link>     
              <Link to={data.link} onClick={handleMenuClose}> {data.title}</Link>
              {/* <p className='absolute top-1 right-0 bg-blue-400 rounded-full px-1'>{data.productCount}</p> */}
            </div>
          ))}
        </div>}
    </div>
  )
}

export default Header;
