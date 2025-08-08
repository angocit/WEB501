import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CRUD from './services/crud'

const Register = () => {
    const [user,setUser] = useState({})
    const navigate = useNavigate()
    const userservice = new CRUD('register')
    const onSubmit = async (e)=>{
        e.preventDefault() // Ngăn trình duyệt chuyển hướng
        // console.log(books); 
        // console.log(books.tensach);
        
        if (user.email==undefined||user.email.indexOf('@')==-1||user.email.indexOf('.')==-1){
            alert('Email không đúng định dạng')
            return;
        }
        if (user.password==undefined||user.password.length<6){
            alert("Mật khẩu > 6 ký tự")
            return;
        }
        try {
           await userservice.Post(user)   
            navigate('/login')
            alert("Đăng ký thành công")
        } catch (error) {
            // console.log(error);            
            alert(error.response.data)
        }       
    }
  return (
    <div>
        <h1>Đăng ký</h1>
        <form onSubmit={onSubmit}>
            <input onChange={(e)=>setUser({...user,email:e.target.value})} type='text' placeholder='Email'/>
            <input onChange={(e)=>setUser({...user,password:e.target.value})} type='text' placeholder='Password'/>
            <button>Thêm mới</button>
        </form>
    </div>
  )
}

export default Register