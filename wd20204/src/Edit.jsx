import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {
    const params = useParams()
    const [product,setProduct] = useState({})
    const id = params.id 
    useEffect(()=>{        
        // console.log(id);   
        // IIFE 
        (async ()=>{
            try {
                const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
                // console.log(data);
                setProduct(data)                
            } catch (error) {
                
            }
        })()   
    },[])
  return (
    <div>
        <h1>{product?.title}</h1>
        <span>{product?.price}</span>
    </div>
  )
}

export default Edit