import React from 'react'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom'
import { projectList } from '../../../utils/api/Admin/project';

const Project = () => {

    const navigate = useNavigate();

    const { data } = useQuery('projectList',projectList)

  return (
    <>
     <nav className="flex w-24 mb-5 px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                <p onClick={()=>navigate('/dashboard')} className="inline-flex items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    Go back
                </p>
                </li>  
            </ol>
        </nav>
        <nav className="flex mb-5 px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                <p onClick={()=>navigate('/dashboard')} className="inline-flex items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    Projects
                </p>
                </li>  
            </ol>
        </nav>
        {/* <AddProject /> */}
        <div className='flex justify-end mb-5 mr-5' >
            <button
                className="border text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => navigate('/addproject')}
            >
                Add Project
            </button>
        </div>
      
        <div className='flex items-center justify-center flex-wrap gap-x-5 gap-y-10' >
            {
                data?.projects?.map((x,ind)=>(
                    <div key={x._id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <p >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{x.projectName}</h5>
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <p onClick={()=>navigate(`/project/${x._id}`)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800   dark:bg-blue-600 dark:hover:bg-blue-700 ">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </p>
                    </div>
                ))
            }
        </div>
        
    </>
  )
}

export default Project