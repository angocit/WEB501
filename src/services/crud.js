import axios from "axios"

class CRUD{
    constructor(collection){
        this.API_URL = `http://localhost:3000/${collection}`
    }
    getAll = async(setData)=>{
        try {
            const {data} = await axios.get(this.API_URL)
            setData(data)
        } catch (error) {
            throw error
        }
    }
}