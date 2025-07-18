import axios from 'axios'
export const getData = async()=>{
    try {
        const {data} = await axios.get('https://dummyjson.com/products')
        const {products} = data
        return products
    } catch (error) {
        
    }
}