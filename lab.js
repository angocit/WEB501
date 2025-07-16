let students = [
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
]
const DisPlayStudent = (studentsarr)=>{
    const tbody = document.querySelector("#sinhvien tbody")
    let tr = ''
    studentsarr.forEach((itemsv,index)=>{
        const {id,name,age,address} = itemsv
        tr+=`<tr>
            <td>${index+1}</td>
            <td>${id}</td>
            <td>${name}</td>
            <td>${age}</td>
            <td>${address}</td>
        </tr>`
    })
    tbody.innerHTML = tr
}
DisPlayStudent(students)
const formdata = document.getElementById("formdata")
formdata.addEventListener("submit",(e)=>{
    e.preventDefault() // Ngăn trình duyệt chuyển hướng
    const name = document.querySelector("input[name=name]").value
    const age = document.querySelector("input[name=age]").value
    const address = document.querySelector("input[name=address]").value
    const id = students.length+1
    const newstudent = {id,name,age,address}
    students = [...students,newstudent]
    DisPlayStudent(students)
})
API_URL = 'https://fakestoreapi.com/products'
const DisPlayProduct = async(url)=>{
    const tbody = document.querySelector("#product tbody")
    try {
        const response = await fetch(url)
        const products = await response.json()
        let tr = ''
    products.forEach((productitem,index)=>{
        const {title,image,price,category} = productitem
        tr+=`<tr>
            <td>${index+1}</td>
            <td>${title}</td>
            <td>${image}</td>
            <td>${price}</td>
            <td>${category}</td>
        </tr>`
    })
    tbody.innerHTML = tr
    } catch (error) {
        
    }
    
}
DisPlayProduct(API_URL)