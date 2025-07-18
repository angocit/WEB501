class Caculator{
    constructor(so1=3,so2=10){
        this.no1 = so1
        this.no2 = so2
    }
    set GanLaiNo1(value){
        this.no1=value
    }
    get DisPlay(){
        console.log(`2 số là: ${this.no1} và ${this.no2}`);
        
    }
    tinhtong(so1,so2){
        return so1+so2
    }
    tinhtong2(){
        return this.no1+this.no2
    }
    tinhhieu = ()=>{
        return this.no1-this.no2
    }
    tich = (a,b)=>a*b
}
const caculator = new Caculator(20,15)
console.log(`Giá trị số 1`,caculator.no1);
caculator.GanLaiNo1 = 100
console.log(`Giá trị số 1 sau khi gán`,caculator.no1);
caculator.DisPlay
// console.log(caculator.no2);
console.log(caculator.tinhtong(7,8));
console.log(caculator.tinhtong2());
console.log(caculator.tinhhieu());
class Khonggian extends Caculator{
    constructor(dai =1,rong=1,cao = 5){
        super(dai,rong)
        this.height = cao
    }
    thetich = ()=>{
        return this.tich(10,5)*this.height
    }
    thetich2 = ()=>{
        return this.no1*this.no2*this.height
    }
}

const khongian = new Khonggian()
console.log(`khonggian`,khongian.tinhtong(10,30));
console.log(`Thể tích`,khongian.tich(10,5)*khongian.height);
console.log(`Thể tích với hàm`,khongian.thetich());
const khongian2 = new Khonggian(30,2,10)
console.log(`The tich 2 là: ${khongian2.thetich2()}`);
