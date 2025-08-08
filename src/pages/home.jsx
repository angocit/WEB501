import React, { useEffect, useState } from 'react'
import CRUD from '../services/crud'

const Home = () => {
    const [products,setProduct] = useState([])
    const productservice = new CRUD('products')
    useEffect(()=>{
        productservice.getAll(setProduct)
    },[])
  return (
    <div>
        <h1>Danh sách sản phẩm</h1>
        <ul>
            {products.length>0&&products.map(item=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Home