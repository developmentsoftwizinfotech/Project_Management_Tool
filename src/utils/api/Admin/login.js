import api from ".."
import { paths } from "../endPoints"


export const login = async(data) =>{
    const url = await api.post(paths.login,data)
    return url?.data
}