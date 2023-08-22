import React, { useState } from 'react'

const MorePop = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <a className="font-medium text-blue-700 cursor-pointer " onClick={()=>setIsOpen(true)}  >More</a>
        {
        isOpen ? 
        <>
        <div className="justify-center bg-black bg-opacity-40 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-5" >         

            <div className="relative w-full max-w-md max-h-full ">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={()=>setIsOpen(false)}  type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only cursor-pointer">Close</span>
                    </button>
                    <div className="p-6 text-center ">
                            <h1 class="text-3xl font-bold pt-8 lg:pt-0">{data.user[0].userName}</h1>
                            <p className='mt-5 flex flex-col items-start px-auto'> Task name : {data.taskName} </p>
                            <p className='mt-5 flex flex-col items-start px-auto'> Task type : {data.taskType} </p>
                            <p className='mt-5 flex flex-col items-start px-auto'> Start date : { data.startDate} </p>
                            <p className='mt-5 flex flex-col items-start px-auto'> End date : {data.endDate} </p>
                            <p className='mt-5 flex flex-col items-start px-auto'> Duration : {data.hour}hr </p>
                            <p className='mt-5 flex flex-col items-start px-auto'> Total time : {data.completedTime}hr </p>
                            <p className='mt-5 flex flex-col items-start px-auto'> Status : {data.status} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        :
        null
    }
    </div>
  )
}

export default MorePop