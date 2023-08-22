import React, { useState } from 'react'

const AddModule = ({name, moduleCount,moduleChangeHandler,moduleInd,AddTaskHandler,taskChangeHandler}) => {

 

  return (
    <>
        <div className='flex flex-col items-start' >
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Module {name}</label>
            <input type="text" onChange={moduleChangeHandler.bind(this,moduleInd)} value={moduleCount.value} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg  block w-full lg:w-3/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
            {
                moduleCount[moduleInd].task?.map((x,ind)=>(
                    <div className='flex flex-col lg:flex-row ' key={x.id} >
                        <div className='flex flex-col items-start ml-6' >
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task{x.id}</label>
                            <input type="text" onChange={taskChangeHandler.bind(this,moduleInd,ind,'taskName')} value={x.taskName} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg  block w-full lg:w-80  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                        </div>
                        <div className='flex flex-col items-start ml-6' >
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time(in Hour)</label>
                            <input type="text" onChange={taskChangeHandler.bind(this,moduleInd,ind,'hour')} value={x.hour} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg  block w-full lg:w-3/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="8" required />
                        </div>    
                        <div className='flex flex-col items-start ml-6' >
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time(in Hour)</label>
                            <select  onChange={taskChangeHandler.bind(this,moduleInd,ind,'taskType')} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg  block w-full lg:w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                <option  >select</option>
                                <option value='frontend' >Frontend</option>
                                <option value='backend' >Backend</option>
                            </select>
                        </div>
                    </div>

                ))
            }
            
        <div className='flex justify-start mb-5 ml-16' >
            <button
                className="border text-sm px-6  py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={AddTaskHandler.bind(this,moduleInd)}
            >
                Add Task
            </button>
        </div>
    </> 
  )
}

export default AddModule