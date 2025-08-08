import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CRUD from './services/crud'

const Edit = () => {
    const [books,setBook] = useState({})
    // Lấy id từ url
    const {id} = useParams()
    const navigate = useNavigate()
    const bookservice = new CRUD('books')
    useEffect(()=>{
       bookservice.GetById(id,setBook)
    //    
    },[])
    const onSubmit = async (e)=>{
        e.preventDefault() // Ngăn trình duyệt chuyển hướng
        // console.log(books); 
        // console.log(books.tensach);
        
        if (books.tensach==undefined||books.tensach==''){
            alert('Tên không để trống')
            return;
        }
        if (books.namxb==undefined||(!isNaN(books.namxb)&&books.namxb>2024)){
            alert("Năm xuất bản < 2025")
            return;
        }
        try {
            const data = await bookservice.Put(books,id)
            alert("Cập nhật thành công")
            navigate('/books')
        } catch (error) {
            console.log(error);            
        }       
    }
  return (
     <div>
        <h1>Sửa sách</h1>
        <form onSubmit={onSubmit}>
            <input defaultValue={books.tensach} onChange={(e)=>setBook({...books,tensach:e.target.value})} type='text' placeholder='Tên sách'/>
            <input defaultValue={books.namxb} onChange={(e)=>setBook({...books,namxb:e.target.value})} type='text' placeholder='Năm XB'/>
            <input defaultValue={books.giatien} onChange={(e)=>setBook({...books,giatien:e.target.value})} type='text' placeholder='Giá tiền'/>
            <input defaultValue={books.tacgia} onChange={(e)=>setBook({...books,tacgia:e.target.value})} type='text' placeholder='Tác giả'/>
            <button>Cập nhật</button>
        </form>
    </div>
  )
}

export default Edit