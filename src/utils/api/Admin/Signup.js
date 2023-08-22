import api from ".."
import { paths } from "../endPoints"


export const signup = async(data) => {
    const token =  localStorage.getItem('token')
    const url = await api.post(paths.signup,data,{ headers : { Authorization : token,'Content-Type' : 'multipart/form-data' } })
    return url
}