import api from "../.."
import { paths } from "../../endPoints"

export const updateTask = async({id,data}) =>{
    const url = await api.put(paths.updateTask+id,data)
    return url
}

export const taskList = async(id) =>{
    const url = await api.get(paths.taskList+id)
    return url
}