import { useEffect, useState } from 'react'
import './App.css'
import CustomButton from './button'

function App() {
  const [products,setProduct] = useState([])
  useEffect(()=>{
    const getProduct = async ()=>{
        try {
          const response = await fetch(`https://fakestoreapi.com/products`)
          const productdata = await response.json()
          setProduct(productdata)        
        } catch (error) {
          setProduct([])
        }
    }
    getProduct()
  },[])
  return (
    <>
    <h1>List Product</h1>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Title</th>
          <th>Image</th>
          <th>Category</th>
          <th>Price</th>          
        </tr>
      </thead>
      <tbody>
        {(products.length>0)&&products.map((item,i)=>(
          <tr key={item.id}>
            <td>{i+1}</td>
            <td><img src={item.image} width={60}/></td>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}
export default App
