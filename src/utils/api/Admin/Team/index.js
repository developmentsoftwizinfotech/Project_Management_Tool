import api from "../.."
import { paths } from "../../endPoints"



export const usersList = async () =>{
    const url = await api.get(paths.users)
    return url?.data
}

export const searchUser = async (data) =>{
    const url = await api.get(paths.searchUser+data)
    return url?.data
}

export const userDetails = async (id) =>{
    const url = await api.get(paths.userDetail+id)
    return url?.data
}

export const deleteUser = async(id)=>{
    const url = await api.delete(paths.deleteUser+id)
    return url?.data
}