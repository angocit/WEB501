import axios from 'axios'
import React, { useEffect, useState } from 'react'

const List = () => {
    const [books,setBook] = useState([])
    useEffect(()=>{
        const getAllBooks = async()=>{
            try {
                const {data} = await axios.get(`http://localhost:3000/books`)
                setBook(data)
            } catch (error) {
                console.log(error);                
            }
        }
        getAllBooks()
    },[])
    const onDelete = async(id)=>{
        try {
            if (confirm("Bạn chắc chứ?")){
                const {data} = axios.delete(`http://localhost:3000/books/${id}`)

            }
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div>
        <h1> Danh sách sản phẩm</h1>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên sách</th>
                    <th>Năm XB</th>
                    <th>Giá tiền</th>
                    <th>Tác giả</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                {
                    books.length>0&&books.map((item,index)=>(
                        <tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.tensach}</td>
                            <td>{item.namxb}</td>
                            <td>{item.giatien}</td>
                            <td>{item.tacgia}</td>
                            <td>
                                <a href={`/books/edit/${item.id}`}>Sửa</a>
                                <button onClick={()=>onDelete(item.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default List