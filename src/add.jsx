import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const [books,setBook] = useState({})
    const navigate = useNavigate()
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
            const {data} = await axios.post(`http://localhost:3000/books`,books)
            navigate('/books')
            alert("Thêm mới thành công")
        } catch (error) {
            
        }       
    }
  return (
    <div>
        <h1>Thêm mới sách</h1>
        <form onSubmit={onSubmit}>
            <input onChange={(e)=>setBook({...books,tensach:e.target.value})} type='text' placeholder='Tên sách'/>
            <input onChange={(e)=>setBook({...books,namxb:e.target.value})} type='text' placeholder='Năm XB'/>
            <input onChange={(e)=>setBook({...books,giatien:e.target.value})} type='text' placeholder='Giá tiền'/>
            <input onChange={(e)=>setBook({...books,tacgia:e.target.value})} type='text' placeholder='Tác giả'/>
            <button>Thêm mới</button>
        </form>
    </div>
  )
}

export default Add