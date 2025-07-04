class Caculator{
    constructor(so1=3,so2=10){
        this.no1 = so1
        this.no2 = so2
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
}
const caculator = new Caculator(20,15)
// console.log(caculator.no2);
console.log(caculator.tinhtong(7,8));
console.log(caculator.tinhtong2());
console.log(caculator.tinhhieu());
