import React from 'react'
import UserDropdown from './UserDropdown'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query';
import { projectDetails, removeassigned } from '../../../utils/api/Admin/project';
import { usersList } from '../../../utils/api/Admin/Team';
import { AiFillDelete } from "react-icons/ai";

const ProjectDetail = () => {
    const navigate= useNavigate();
    const {id} = useParams();
    const { data :users} = useQuery('usersList',usersList) 
    const { data, refetch : fetching  } = useQuery('projectDetails',projectDetails.bind(this,id));
    const { mutateAsync : taskUser } = useMutation('removeassigned',removeassigned,{ onSuccess : ()=>{ fetching() } })
    
    const removeHanlder = (userId,taskId) =>{
        const detail = {
            userId,taskId
        }
        taskUser(detail)
    }

  return (
    <div className='flex flex-col justify-start items-start ' >

    <p className="text-teal-600 text-2xl pl-6 py-5 ">{data?.projectName}</p>
    {
        data?.modules?.map((x,ind)=>(

    <div className="text-gray-700 w-full mb-5">
        <div className='w-full px-6' >
            <div type="button" className="flex items-center  justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 border border-b-0 border-gray-200 rounded-t-xl dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800" >
                <span>{x.moduleName}</span>
                {/* <button type="button" onClick={()=>navigate('/addproject')} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900  bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700   dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Edit
                </button> */}
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 w-96">
                                Task
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Duration(hour)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Task Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Assigned To
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total Time(hour)
                            </th>
                        </tr>
                    </thead>
                    { x?.tasks?.map((item,ind)=>(
            
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.taskName}
                            </th>
                            <td className="px-6 py-4">
                                {item.hour}hr
                            </td>
                            <td className="px-6 py-4">
                                {item.taskType}
                            </td>
                            <td className="px-6 py-4">
                            {
                                item?.user[0] ?
                                    <a className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <img className="w-6 h-6 mr-2 rounded-full" src={`http://127.0.0.1:8080/uploads/${item?.user[0]?.image}`} alt="image" />
                                        {item?.user[0]?.userName}
                                        <AiFillDelete onClick={()=>removeHanlder(item?.user[0]._id,item?._id)} className='ml-10 cursor-pointer text-lg '  />
                                    </a>
                                :
                                <UserDropdown users={users} taskId={item?._id} projectId={data?._id} fetching={fetching} />
                            } 
                            </td>
                            <td className="px-6 py-4">
                                {item.status}
                            </td>
                            <td className="px-6 py-4">
                                <a className="font-medium"  >{item.completedTime}hr</a>
                            </td>
                        </tr>
                    </tbody>
                    ))}
                </table>
                
            </div>
        </div>
    </div>
    ))

    }
    
    {/* <div className='pt-16 w-full ' >
        <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800 dark:text-white ">Project Team</p>
    </div>

    <div className='grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 w-full mt-24 px-6' >
        <div className="mb-24 md:mb-0">
            <div
                className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex justify-center">
                    <div className="flex justify-center -mt-[75px]">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                        className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
                    </div>
                </div>
                <div className="p-6">
                    <h5 className="mb-4 text-lg font-bold">Darren Randolph</h5>
                    <p className="mb-6">Marketing expert</p>
                    <div className="mx-auto flex list-inside justify-center">
                    <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900  bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700   dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Remove
                    </button>
                    <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900  bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700   dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        View Profile
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default ProjectDetail