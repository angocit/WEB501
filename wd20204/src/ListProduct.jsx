import React, { useEffect, useState } from 'react'
import { hieu } from './services/hieu'
import axios from 'axios'

const ListProduct = () => {
    const [productAPI,setProductAPI] = useState([])
    const products = [
	{
	id:1,
	tensp:"Sản phẩm A",
	gianhap: 100000,
	giaban:200000
	},
	{
	id:2,
	tensp:"Sản phẩm B",
	gianhap: 150000,
	giaban:210000
	},
	{
	id:3,
	tensp:"Sản phẩm C",
	gianhap: 35000,
	giaban:60000
	}]
    useEffect(()=>{
        (async ()=>{
            try {
                const {data} = await axios.get(`https://dummyjson.com/products`)
                setProductAPI(data.products)                
            } catch (error) {
                
            }
        })()
    },[])
  return (
    <div>
        <h1>Danh sách sản phẩm</h1>
        <ul>
            {products.map(item=>(
                <li key={item.id}>
                    Tên sản phẩm: {item.tensp} 
                    Giá nhập: {item.gianhap}
                     Giá bán: {item.giaban}
                     Lợi nhuận: {hieu(item.giaban,item.gianhap)}
                </li>
            ))}
            
        </ul>
        <h2>Sản phảm theo API</h2>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Thumbnail</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {productAPI.map(item=>(
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.thumbnail}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListProduct