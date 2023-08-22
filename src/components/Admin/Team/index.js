import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AddEmpolyee from './AddEmpolyee';
import DeletePop from './DeletePop';
import { searchUser, usersList } from '../../../utils/api/Admin/Team';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';

const Team = () => {
  const navigate = useNavigate();
    
  const [list, setList] = useState([])
  const [search,setSearch ] = useState('')
  const [searchErr, setSaerchErr ] = useState('')
  

  const { data, refetch : userListFecth } = useQuery('userList',usersList)
  const { mutateAsync : searchingName } = useMutation('searchUser',searchUser)


  useMemo(()=>{
        const filteredData =  data?.filter(x => x.userName?.includes(search))
        setList(filteredData)
  },[search])
    

  return (
    <>

        <nav className="flex  px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" >
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <p onClick={()=>navigate('/team')} className="inline-flex items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        Team
                    </p>
                </li>  
            </ol>
        </nav>

        <div className=" overflow-x-auto shadow-md sm:rounded-lg mt-5 px-5  ">
            <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
                <AddEmpolyee userListFecth={userListFecth} />
                <div className='flex' >
                    <label  className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute cursor-pointer inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4  text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" onChange={(e)=>setSearch(e.target.value)} id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                    </div>
                </div>
            </div>
            <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            S.no
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Position
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Department
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list?.map((x,ind)=>(
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4">
                            {ind + 1}
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src={`http://127.0.0.1:8080/uploads/${x.image}`} alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">{x.userName}</div>
                                    <div className="font-normal text-gray-500">{x.email}</div>
                                </div>  
                            </th>
                            
                            <td className="px-6 py-4">
                                {x.email}
                            </td>
                            <td className="px-6 py-4">
                                {x.designation}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div ></div> {x.department}
                                </div>
                            </td>
                            <td className="flex px-6 py-4 gap-4">
                                <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>navigate(`/team/${x._id}`)}>Profile</p>
                                <DeletePop user={x._id} userListFecth={userListFecth} />
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Team