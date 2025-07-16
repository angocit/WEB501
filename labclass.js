class Student{
    constructor(students){
        this.students = students
    }
    set setNewStudent(value){
        this.students = value
    }
    DisPlayStudent = (studentsarr)=>{
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
}
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
const studentobj = new Student(students)
studentobj.DisPlayStudent(studentobj.students)
const formdata = document.getElementById("formdata")
formdata.addEventListener("submit",(e)=>{
    e.preventDefault() // Ngăn trình duyệt chuyển hướng
    const name = document.querySelector("input[name=name]").value
    const age = document.querySelector("input[name=age]").value
    const address = document.querySelector("input[name=address]").value
    const id = students.length+1
    const newstudent = {id,name,age,address}
    studentobj.setNewStudent = [...studentobj.students,newstudent]
    studentobj.DisPlayStudent(studentobj.students)
})
