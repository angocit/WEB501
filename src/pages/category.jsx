import React, { useEffect, useState } from 'react'
import CRUD from '../services/crud'

const Category = () => {
  const [category,setCategory] = useState([])
    const catservice = new CRUD('category')
    useEffect(()=>{
        catservice.getAll(setCategory)
    },[])
  return (
    <div>
        <h1>Danh sách danh mục</h1>
        <ul>
            {category.length>0&&category.map(item=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Category