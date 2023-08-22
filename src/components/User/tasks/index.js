import React from 'react'
import { useNavigate } from 'react-router-dom'
import UpdateTask from './UpdateTask';
import { useQuery } from 'react-query';
import { userDetails } from '../../../utils/api/Admin/Team';
import { taskList } from '../../../utils/api/User/Task';

const Tasks = () => {
    const navigate = useNavigate();
    const id = localStorage.getItem('userId')
    const { data, refetch : updateList } = useQuery('taskList',taskList.bind(this,id))


  console.log(data)

  return (
    <>
    <div className='flex flex-col justify-start items-start ' >

    <p className="text-teal-600 text-2xl pl-6 py-5 ">Project Name</p>

            <div className="text-gray-700 w-full mb-5">
                <div className='w-full px-6' >
                    <div type="button" className="flex items-center  justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 border border-b-0 border-gray-200 rounded-t-xl dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800" >
                        <span>module name</span>
                        {/* <button type="button" onClick={()=>navigate('/addproject')} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900  bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700   dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Edit
                        </button> */}
                    </div>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Task
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Duration(hour)
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Start date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        End date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Total Time(hour)
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.data?.map((x)=>(
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={x._id} >
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {x.taskName}
                                        </th>
                                        <td className="px-6 py-4">
                                            {x.hour}hr
                                        </td>
                                        <td className="px-6 py-4">
                                            {x.status}
                                        </td>
                                        <td className="px-6 py-4">
                                            {  x.startDate ? x.startDate?.split('T')[0] : 'yyyy/mm/dd' }
                                        </td>
                                        <td className="px-6 py-4">
                                            { x.endDate ? x.endDate?.split('T')[0] : 'yyyy/mm/dd' }
                                        </td>
                                        <td className="px-6 py-4">
                                            {x.completedTime}hr
                                        </td>
                                        <td className="px-6 py-4">
                                            <UpdateTask updateList={updateList} taskId={x._id}  />
                                        </td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Tasks