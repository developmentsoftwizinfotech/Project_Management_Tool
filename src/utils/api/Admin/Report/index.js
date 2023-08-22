import api from "../.."
import { paths } from "../../endPoints"



export const reportList = async(date) =>{
    const url = await api.get(paths.reportList+date)
    return url
}