import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Add = () => {
  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState('')
  const [products,setProducts] = useState([])
  const onSubmitForm = async (e)=>{
      e.preventDefault()
      const productdata = {name,price,image}
    try {
        const {data} = await axios.post(`http://localhost:3000/products`,productdata)
        // const newproduct = [...products,data]
        // console.log(newproduct);        
        setProducts([...products,data])
        setName('')
        setPrice('')
        setImage('')
        alert("Thêm mới thành công")
    } catch (error) {
      alert("Thêm mới thất bại")
    }
  }
  //lấy ds sản phẩm
  useEffect(()=>{
    (async()=>{
        try {
          const {data} = await axios.get(`http://localhost:3000/products`)
          // console.log(data); 
          // gán dữ liệu vào state products 
          setProducts(data)         
        } catch (error) {
          
        }
    })()
  },[])
  const onDelete = async(id)=>{
    try {
        if (window.confirm("Bạn thực sự muốn xóa")){
            await axios.delete(`http://localhost:3000/products/${id}`)
            const newproduct = products.filter(item=>item.id!=id)
            setProducts(newproduct)
            alert("Xóa thành công")
        }
    } catch (error) {
       alert("Xóa thất bại")
    }
  }
  return (
    <div>
        <h1>Thêm mới sản phẩm</h1>
        <form onSubmit={onSubmitForm}>
            <input value={name} onChange={(e)=>setName(e.target.value)} type='text' placeholder='Tên sản phẩm'/>
            <input value={price} onChange={(e)=>setPrice(e.target.value)} type='text' placeholder='Giá sản phẩm'/>
            <input value={image} onChange={(e)=>setImage(e.target.value)} type='text' placeholder='Ảnh sản phẩm'/>
            <button>Submit</button>
        </form>
        <h2>Danh sách sản phẩm</h2>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Ảnh sản phẩm</th>
              <th>Giá sản phẩm</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {/* Duyệt mảng products  */}
              {
                products.map((item,index)=>(
                  <tr key={item.id}>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.image}</td>
                      <td>{item.price}</td>
                      <td>
                          Sửa | <button onClick={()=>onDelete(item.id)}>Xóa</button>
                      </td>
                  </tr>
                ))
              }
          </tbody>
        </table>
    </div>
  )
}

export default Add