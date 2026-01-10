import React from 'react'
import './App.css'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'
import MyOrder from './components/MyOrder.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import WishList from './components/WishList.jsx'
import { FavListProvider } from './context/FavContext.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import MainLayout from './components/MainLayout.jsx'
import ProductDetails from './components/ProductDetails.jsx'

function App() {
    

  return (
  <FavListProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path ="/signup" element={<Signup/>}></Route>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/wishlist" element={<WishList/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/myorders" element={<MyOrder/>}></Route>
            <Route path ="/products/:id" element={<ProductDetails/>}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  </FavListProvider>
  )
}

export default App
