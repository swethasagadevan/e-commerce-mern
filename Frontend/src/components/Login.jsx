import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FavListContext } from '../context/FavContext'

const Login = () => {

  const {setLoggedInUser}=useContext(FavListContext)
  const [email,setEmail]=useState("")
  const [password,setPassword] =useState("")
  const [error,setError] =useState()
   const [loader,setLoader] = useState(false)

const navigate = useNavigate();


  let backendurl = import.meta.env.VITE_BACKEND_URL

  function handleEmail (e){
    setEmail(e.target.value)
  }

  function handlePassword (e){
    setPassword(e.target.value)
  }

  function handleLogin (e,email,password){
    //console.log(e,password,email)
    e.preventDefault();
    setLoader(true)
      //console.log("Calling ",`${backendurl}/login`)
      if (email.length ===0 && password.length===0){
        setError("Please enter details")
        setLoader(false)
      }
      else{
        axios.post(`${backendurl}/login`,
        {enteredmail:email,enteredpass:password},
        {headers: {"Content-Type": "application/json",},
      })
      .then((data)=>{
        console.log(data)
        setLoggedInUser(data.data)
        navigate("/")
      })
      .catch(()=>{console.log("error while fetching"),setError("Incorrect email/password")})
      setLoader(false)
      }
      
  }

  return (
<>

    <div className='text-center h-screen flex flex-col items-center bg-gradient-to-tl from-purple-300 via-pink-200 to-violet-300 rounded-lg shadow-xl'>
            <h1 className='text-2xl bg-white w-full font-bold p-5'>BUYLO 🛍️ </h1>
            <form className='p-3'>
                <div>
                    <p className='text-center p-5 font-bold text-xl'>Welcome to Buylo 🎉 </p>
                    <p className='flex justify-center items-center gap-1'>Curated Products.🛍️ Seamless Shopping.😃 </p>
                </div>
                <div className=' mx-auto m-5'>
                        <div className='mb-3 flex flex-col '>
                            {/* <label className='p-2 text-left'>Email :</label> */}
                            <input type='text' className='border-2 rounded-lg p-2' placeholder='Enter your email'  onChange={handleEmail} required/>
                        </div>
                        <div className='mb-3 flex flex-col '>
                            {/* <label className='p-2 text-left'>Password :</label> */}
                            <input type="password" className='border-2 rounded-lg p-2' placeholder='Enter your password'  onChange={handlePassword} required/> 
                        </div>
                </div>
                <div >
                    <input className='p-2 rounded-lg bg-blue-400 font-bold hover:scale-105' type='Submit' defaultValue="Login" onClick={(e)=>handleLogin(e,email,password)}/>  
                </div>
            </form>
            <div>
              <p>New to Buylo <Link to="/Signup" className='text-blue-500 underline'>SignUp</Link></p>
            </div>

            { error ?
              <div className='bg-red-400 p-2 mt-3 animate-pulse'>
              {error}
            </div>
            :""
            }

             {loader && <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>}
        </div>
        </>
  )
}

export default Login;