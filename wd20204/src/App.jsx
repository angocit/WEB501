import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TinhTong } from './services/caculator'
import { getData } from './services/product'

function App() {
  const title = "wd20204"
  const [products,setProduct] = useState([])
const students = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    age: 19,
    address: "Hà Nội"
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    age: 20,
    address: "Hải Phòng"
  },
  {
    id: 3,
    name: "Lê Văn Cường",
    age: 21,
    address: "Đà Nẵng"
  },
  {
    id: 4,
    name: "Phạm Thị Dung",
    age: 22,
    address: "TP. Hồ Chí Minh"
  },
  {
    id: 5,
    name: "Hoàng Văn Em",
    age: 20,
    address: "Cần Thơ"
  }
];
// Thực hiện hành động nào đó khi component khởi tạo sử dụng useEffect
useEffect(()=>{
  (async ()=>{
      const product = await getData()
      // console.log(product);
      setProduct(product)
  })()
      
},[])
  return (
    <>
      {/* <h1>Tổng 5+6 = {TinhTong(5,6)}</h1> */}
      <h1>Danh sách sinh viên</h1>
      <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>Tên</th>
          <th>Tuổi</th>
          <th>Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
            {students.map((item,index)=>
              (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.address}</td>
                </tr>
              )
            )}
        </tbody>
      </table>
      <h1>Danh sách sản phẩm</h1>
      <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>title</th>
          <th>Thumbnail</th>
          <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {products.map((item,index)=>
              (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.thumbnail}</td>
                  <td>{item.price}</td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </>
  )
}

export default App
