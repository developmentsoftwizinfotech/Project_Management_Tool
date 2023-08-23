import React, { useState } from 'react'
import { BiFilter } from "react-icons/bi";
import { useQuery } from 'react-query';
import { reportList } from '../../../utils/api/Admin/Report';
import MorePop from './MorePop';


const Report = () => {


    const [isOpen, setIsOpen] = useState(false);
    
    const d = new Date().toJSON();
    const todayDate = d.split('T')[0]
    const [ filterDate, setFilterDate ] = useState(todayDate);

    const { data } = useQuery(['reportList',filterDate],reportList.bind(this,filterDate))       
    
    const dateHandler = (e) =>{
        setFilterDate( e.target.value)
    }


  return (
    <>
        {/* <div className='flex justify-end ' >
            <label  className="sr-only">Search</label>
            <div className="relative">
                <div className="absolute cursor-pointer inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4  text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text"  id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
            </div>
        </div> */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 ">
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
                        <th scope="col" className="px-6 py-3 flex gap-2">
                            Date <BiFilter className='text-lg cursor-pointer' onClick={()=>setIsOpen((x) => !x)} />
                            {
                                isOpen ? 
                                <div className=' bg-slate-800 z-10 ' ><input type='date' onChange={dateHandler} /></div>
                                :
                                null
                            }
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.data.map((x,ind)=>(
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={x._id} >
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {x.taskName}
                                </th>
                                <td className="px-6 py-4">
                                    {x.hour}
                                </td>
                                <td className="px-6 py-4">
                                    {x.taskType}
                                </td>
                                <td className="px-6 py-4">
                                    {
                                        x.user ? 
                                        <a className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <img className="w-6 h-6 mr-2 rounded-full" src={`http://127.0.0.1:8080/uploads/${x?.user[0]?.image}`} alt="image" />
                                            {x?.user[0]?.userName}
                                        </a>
                                        :
                                        null
                                    }
                                </td>
                                <td className="px-6 py-4">
                                    {x.endDate.split('T')[0]}
                                </td>
                                <td className="px-6 py-4">
                                    <MorePop  data={x} />
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>

  )
}

export default Report