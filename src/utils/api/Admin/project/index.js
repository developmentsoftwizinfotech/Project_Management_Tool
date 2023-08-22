import api from "../.."
import { paths } from "../../endPoints"


export const addProject = async(data) =>{
    const url = await api.post(paths.addProject,data)
    return url?.data
}

export const projectList = async() =>{
    const url = await api.get(paths.projectList)
    return url?.data
}

export const projectDetails = async(id) =>{
    const url = await api.get(paths.projectDetail+id)
    return url?.data
}

export const assignTask = async(data)=>{
    const url = await api.put(paths.assignTask,data)
    return url
}

export const removeassigned = async(data) => {
    const url = await api.put(paths.removeassigned,data)
    return url
}