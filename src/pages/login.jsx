import React, { useState } from 'react'
import CRUD from '../services/crud'

const Login = () => {
    const [user,setUser] = useState({})
    const uservice = new CRUD('login')
     const onSubmit = async (e)=>{
        e.preventDefault()
        try {
           const userdata = await uservice.Add(user)  
           console.log(userdata);           
            alert("Đăng nhập thành công")
        } catch (error) {
            // console.log(error); 
            alert(error.response.data)           
        }        
    }
  return (
    <div>
        Register
         <form onSubmit={onSubmit}>
            <input type='text' onChange={(e)=>setUser({...user,email:e.target.value})}/>
            <input type='text' onChange={(e)=>setUser({...user,password:e.target.value})}/>
            <button>Đăng nhập</button>
        </form>
    </div>
  )
}

export default Login