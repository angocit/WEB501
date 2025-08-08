import axios from "axios"

class CRUD{
    constructor(collection){
        this.API_URL = `http://localhost:3000/${collection}`
    }
    getAll = async(callbackFn)=>{
        try {
            const {data} = await axios.get(this.API_URL)
            callbackFn(data)
        } catch (error) {
            throw error
        }
    }
    Add = async(datainput)=>{
        try {
            const {data} = await axios.post(this.API_URL,datainput)
            return data
        } catch (error) {
            throw error
        }
    }
}
export default CRUD