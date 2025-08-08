import React, { useState } from 'react'
import CRUD from '../services/crud'

const Register = () => {
    const [user,setUser] = useState({})
    const uservice = new CRUD('register')
     const onSubmit = async (e)=>{
        e.preventDefault()
        try {
            await uservice.Add(user)  
            alert("Đăng ký thành công")
        } catch (error) {
            console.log(error);            
        }        
    }
  return (
    <div>
        Register
         <form onSubmit={onSubmit}>
            <input type='text' onChange={(e)=>setUser({...user,email:e.target.value})}/>
            <input type='text' onChange={(e)=>setUser({...user,password:e.target.value})}/>
            <button>Thêm mới</button>
        </form>
    </div>
  )
}

export default Register