import React, { useState } from 'react'
import { useMutation } from 'react-query';
import { updateTask } from '../../../utils/api/User/Task';

const UpdateTask = ({taskId,updateList}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [ updates, setUpdates ] = useState({
        startDate : "",
        endDate : "",
        completedTime : "",
        status : ""
    })

    const { mutateAsync : updated } = useMutation('updateTask',updateTask)

    const changeHandler = (e) =>{
        setUpdates((value=>({...value,[e.target.name]:e.target.value})))
    }

    const updatehandler = () =>{
        console.log(updates)
        updated({id : taskId,data :updates})
        .then((res)=>{
            setIsOpen(false)
            updateList();
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <>
    {/* <p className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={()=>setIsOpen(true)} >Delete</p> */}
    <a className="font-medium text-sky-600 cursor-pointer " onClick={()=>setIsOpen(true)}>update</a>



    {
        isOpen ? 
        <>
        <div className="justify-center bg-black bg-opacity-40 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-5" >         
            <div className="relative w-full max-w-md max-h-full">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" onClick={()=>setIsOpen(false)}  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center">
                        <div className='flex flex-col items-start pt-5' >
                            <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                            <input type="date" name='startDate' value={updates.startDate} onChange={changeHandler} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="select"  /> 
                        </div>
                        <div className='flex flex-col items-start pt-5' >
                            <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                            <input type="date" name='endDate' value={updates.endDate} onChange={changeHandler} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="select"  /> 
                        </div>
                        <div className='flex flex-col items-start pt-5' >
                            <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Time(in hours)</label>
                            <input type="text" name='completedTime' value={updates.completedTime} onChange={changeHandler} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="00"  /> 
                        </div>
                        <div className='flex flex-col items-start pt-5 ml-6' >
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                            <select name='status' value={updates.status} onChange={changeHandler} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg  block w-full lg:w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                <option  >select</option>
                                <option value='in progress' >in progress</option>
                                <option value='completed' >completed</option>
                            </select>
                        </div>
                        <button onClick={updatehandler}   type="button" className="text-gray-500 bg-white mt-5 hover:bg-gray-100  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </>
        :
        null
    }
    </>
  )
}

export default UpdateTask


