import React, { useState } from 'react'
import CRUD from '../services/crud'

const AddCategory = () => {
    const [category,setCategory]= useState({})
    const catservice = new CRUD('category')
    const onSubmit = async (e)=>{
        e.preventDefault()
        try {
            await catservice.Add(category)  
            alert("Thêm thành công")
        } catch (error) {
            console.log(error);            
        }        
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type='text' onChange={(e)=>setCategory({...category,name:e.target.value})}/>
            <button>Thêm mới</button>
        </form>
    </div>
  )
}

export default AddCategory