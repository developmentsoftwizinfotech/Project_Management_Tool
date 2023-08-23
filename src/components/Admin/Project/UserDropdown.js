import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { assignTask } from '../../../utils/api/Admin/project'

const UserDropdown = ({users,taskId,fetching}) => {

    const [isShow, setIsShow ] = useState(false)
    const { mutateAsync : details } = useMutation('assignTask',assignTask)

    const selectHandler = async(info)=>{
        const id = info._id
        const data = {
            taskId : taskId,userId : id
        }
        await details(data)
        .then((res)=>{
            fetching()
        })
        .catch((err)=>{
            console.log(err)
        })
    } 

  return (
    <div>
        <button
            className="border text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={()=>setIsShow(x => !x)}
        >
            Assign
        </button>
        {
            isShow ?

            <div className="absolute z-10  mt-2 bg-white rounded-md shadow-lg max-h-40 overflow-y-auto" >
               
                <ul className="py-1 px-10">
                {
                    users?.map((x,ind)=>(
                        <li key={ind}>
                            <a onClick={()=>selectHandler(x)} className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <img className="w-6 h-6 mr-2 rounded-full" src={`http://127.0.0.1:8080/uploads/${x.image}`} alt="Jese image" />
                                {x.userName}
                            </a>
                        </li>
                    ))
                }
                </ul>
            </div>
        :
        null
        }
        
    </div>
  )
}

export default UserDropdown