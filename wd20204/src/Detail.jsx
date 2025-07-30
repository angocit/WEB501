import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [product,setProduct] = useState({})
    const params = useParams()
    const id = params.id
   useEffect(()=>{
    // console.log(id);
    (async()=>{
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`)
            // console.log(response.data);
            setProduct(response.data)
        } catch (error) {
            
        }
    })()
   },[])
  return (
    <div>Tên sản phẩm: {product.title} - Giá tiền: {product.price}</div>
  )
}

export default Detail