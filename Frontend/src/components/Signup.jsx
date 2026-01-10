import axios from 'axios'
import React, { useState } from 'react'
import { FaShoppingBag} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Signup = () => {
    const backendurl =import.meta.env.VITE_BACKEND_URL

    const [isVisible,setIsVisible]=useState(true)
    const [loader,setLoader] = useState(false)
    const [user,setUser] =useState()
    const [userDetails , setUserDetails] =useState({userName:"",email:"",password:""})
    // const [email , setEmail] =useState()
    // const [password , setPassword] =useState()


    function handleusername (event){
        setUserDetails((prevname)=>({...prevname,userName : event.target.value}))
    }

    function handleEmail (e){
        setUserDetails((prevname)=>({...prevname,email : e.target.value}))
    }
    function handlePassword(e){
        setUserDetails((prevname)=>({...prevname,password : e.target.value}))
    }

    function handleSignup(e){
        setLoader(true)
        e.preventDefault()
        //console.log(userDetails.userName.length)
        if (userDetails.userName.length==0 && userDetails.email.length==0 && userDetails.password.length==0){
            setUser("Please enter details")
            setLoader(false)
        }
        else{
            //save to db
        axios.post(`${backendurl}/signup`,{data:userDetails})
        .then((data)=>{
            console.log(data)
            if (data.data == "User Exsits"){
                setUser("User already exsits")
                setLoader(false)
            }
            else{  
                setIsVisible(false)
                setLoader(false)
                setUser("")
            }
        })
        .catch(()=>console.log("error while submitting user details"))
        // console.log(userDetails)
        // console.log(backendurl)
        }
        
    }

  return (
<>
    

    <div className='text-center flex flex-col items-center h-screen bg-gradient-to-tl from-purple-300 via-pink-200 to-violet-300 border rounded-lg shadow-2xl'>
        <h1 className='text-2xl bg-white w-full font-bold p-5'>BUYLO 🛍️ </h1>
        {isVisible && <>
        <form className=' p-5'>
            <div>
                <p className='text-center p-5 font-bold text-xl flex justify-center items-center gap-2'>Welcome to Shoopees <FaShoppingBag/> </p>
                <p className='flex justify-center items-center gap-1'>Curated Products.🛍️ Seamless Shopping.😃 </p>
            </div>
            <div className=' mx-auto m-5'>
                    <div className='mb-3 flex flex-col '>
                        {/* <label className='p-2 text-left'>UserName :</label> */}
                        <input type='text' className='border-2 rounded-lg p-2' placeholder='Enter your Username'  onChange={handleusername} required/>
                    </div>
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
                <input className='p-2 rounded-lg bg-blue-400 font-bold hover:scale-105' type='Submit' defaultValue="SignUp" onClick={handleSignup}/>  
            </div>
        </form>

       {loader && <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>}

        <div className='p-2'>
            <p>Already registered.. <Link to="/" className='text-blue-400 underline'>Click here to Login</Link></p>
        </div>
        </>}

        { user ?
              <div className='bg-red-400 p-2 mt-3 animate-pulse'>
              {user}
            </div>
            :""
            }
         
        {
            !isVisible && <>
            <div className='p-5'>
                <h2 className='text-green-700 p-5'>Registered successfully</h2>
                <Link to="/" className='text-blue-800 underline animate-pulse'>Login here</Link>
            </div>
            
            </>
        }
    </div>
    </>
  )
}

export default Signup;