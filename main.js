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
function tinhtong(...phong){
    // let tong = 0
    // for(sinhvien of phong){
    //     tong+=sinhvien
    // }
    // return tong
    return phong.reduce(function(total,item){
        return total+item
    },0)
}
console.log(`Tổng số SV là ${tinhtong(30,25,40)} `);
