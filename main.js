// Destructuring: Trích xuất giá trị phần tử từ mảng 
// hoặc thuộc tính của
// object và gán vào biến nào đó 
// - Mảng 
// const a = [6,7,8,10]
// // var b = a[0]
// // var c = a[1]
// // const [b,c] = a
// const [b,,c]=a
// console.log(b);
// console.log(c);
// - Object 
// const person = {
//     name:"Ngọc",
//     age:20,
//     address:"Thái Nguyên"
// }
// // Tên biến biến trùng tên thuộc tính
// const {name,age} = person
// console.log(name);
// console.log(age);
// // Tên biến biến khác tên thuộc tính
// const {name:ten,age:tuoi} = person
// console.log(ten);
// console.log(tuoi);
// SPREAD: Copy hoặc mở rộng phần của mảng 
// hoặc thuộc tính của đối tượng
// - Mảng 
// const a = [6,5,10,30]
// const b = [...a]
// // Mở rộng
// const c = [...a,9,2,31]
// b.push(9)
// console.log(`mangr gốc`, a);
// console.log(`mangr copy`, b);
// console.log(c);

// Đặc điểm: Không làm thay đổi mảng gốc
// Object 
// const person = {
//     name:"Ngọc",
//     age:20,
//     address:"Thái Nguyên"
// }
// const person2 = {...person}
// console.log(person2);
// // Mở rộng 
// const ps3 = {...person,classname:"WD20204"}
// console.log(ps3);
// // copy và thay đổi lại giá trị của thuộc tính
// const ps4 = {...person,age:30}
// console.log(ps4);
// REST 
// function tinhtong(...phong){
//     // let tong = 0
//     // for(sinhvien of phong){
//     //     tong+=sinhvien
//     // }
//     // return tong
//     return phong.reduce(function(total,item){
//         return total+item
//     },0)
// }
// console.log(`Tổng số SV là ${tinhtong(30,25,40)} `);
// Arrow function : Hàm mũi tên
//  const tinhtong = (a,b)=>{
//     //todo something
//     return a+b
//  }
//  const tinhtong = (a,b)=>a+b
//  console.log(tinhtong(10,20));
//  Hàm chỉ có 1 tham số 
// const canbac2 = (a)=>Math.sqrt(a)
// const canbac2 = a=>Math.sqrt(a)
// console.log(canbac2(4));
// GỌi hàm ngay lập tức: IIFE
// const binhphuong = a=>console.log(a*a);
// binhphuong(5)
// (a=>console.log(a*a))(5)
// const person = {
//     name:"Ngoc",
//     GetName1: function (){
//         console.log(this.name);        
//     },
//     GetName2:()=>{
//         console.log(this.name);        
//     }
// }
// person.GetName1()
// person.GetName2()

// Tham số mặc định trong hàm default parameter
// const tinhtong = (a,b=10)=>a+b
// console.log(tinhtong(5));
// lưu ý: Tham số mặc định phải nằm sau tham số 
// thông thường
// setTimeout(()=>{
//     console.log(1);    
// },1000)
// setTimeout(()=>{
//     console.log(2);    
// },500)
// setTimeout(()=>{
//     console.log(3);    
// },100)
// setTimeout(()=>{
//     console.log(4);    
// },2000)
// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//             setTimeout(() => {
//                 console.log(4);
//             }, 2000)
//         }, 100)
//     }, 500)
// }, 1000)
// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//     },1000)
// })
// promise.then(value=>{
//     console.log(value);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(2)
//         },100)
//     })    
// }).then(value=>{
//     console.log(value);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(3)
//         },5000)
//     })
// }).then(value=>{
//     console.log(value);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(4)
//         },200)
//     })   
// }).then(value=>console.log(value))

// const response = fetch("https://dummyjson.com/products")
// console.log(response);
// response.then(res=>{
//     // console.log(res);
//     const product = res.json()
//     console.log('Sản phẩm',product);
//     product.then(value=>{
//         console.log(value);
        
//     })
// })
// const response = fetch('https://dummyjson.com/auth/me', {
//   method: 'GET',
//   headers: {
//     'Authorization': 'Bearer /* YOUR_ACCESS_TOKEN_HERE */', // Pass JWT via Authorization header
//   }, 
//   credentials: 'include' // Include cookies (e.g., accessToken) in the request
// })
// // console.log(response);
// response.catch(value=>{
//     console.log(value);
    
// })
// async function getData(){

// }
// const getData = async ()=>{
//     try {
//         const response = await fetch("https://dummyjson.com/products")
//         const product = await response.json()
//         console.log(product);
        
//     } catch (error) {
        
//     }
// }
// getData()
const response = axios.get(`https://dummyjson.com/products`)
// console.log(response);
response.then(value=>{
    // console.log(value.data);
    const {data} = value
    // console.log(data);
    const {products} = data
    console.log('Promise',products);
    
})
const getData = async()=>{
    try {
        const {data} = await axios.get('https://dummyjson.com/products')
        const {products} = data
        console.log('Hàm bất đồng bộ',products);
    } catch (error) {
        
    }
}
getData()