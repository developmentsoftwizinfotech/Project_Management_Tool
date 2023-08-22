import React, { useState } from 'react'
import AddModule from './AddModule'
import { useNavigate } from 'react-router-dom'
import ArrowIcon from '../../Common/ArrowIcon'
import { useMutation } from 'react-query'
import { addProject } from '../../../utils/api/Admin/project'

const AddProjects = () => {
    const navigate = useNavigate()

    const { mutateAsync : details } = useMutation('addProject',addProject)

    const [projectName, setName] = useState('')
    const [ modules, setModuleCount ] = useState([
        {moduleName : '',task : [ { hour : 0, taskName : '', taskType : '' }]}
    ])

    const AddModuleHandler = (e) =>{
        setModuleCount(old => [...old, { value:'',task : [{ hour : 0, taskName : '',taskType : '' }]}])
    }

    const moduleChangeHandler = (moduleIndex,e) =>{
        console.log(e.target.value)
        const clone = [...modules]
        clone[moduleIndex].moduleName = e.target.value
        setModuleCount(clone)
    }


    const AddTaskHandler = (moduleIndex) =>{
        console.log(moduleIndex)
       const clone = [...modules]
       clone[moduleIndex].task.push({
            hour : 0,
            taskName : '',
            taskType : ''
       })
       setModuleCount(clone)
    }

    const taskChangeHandler = (moduleIndex,taskIndex,uid,e)=>{
        const clone = [...modules]
        clone[moduleIndex].task[taskIndex][uid] = e.target.value
        setModuleCount(clone)
    }

    const submitHandler = async()=>{
        const data = {projectName,modules}
        await details(data)
        .then((res)=>{
            console.log(res)
            navigate('/project')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
        <nav className="flex w-60 mb-5 px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <p onClick={()=>navigate('/project')} className="inline-flex items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        Projects
                    </p>
                </li> 
                <ArrowIcon />
                <li className="inline-flex items-center">
                    <p onClick={()=>navigate('/addproject')} className="inline-flex items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        Add Project
                    </p>
                </li> 
            </ol>
        </nav>
        <h3 className="text-4xl font-semibold font-mono leading-normal text-blueGray-700 mb-2">
            Add Project 
        </h3>

        <form className='flex flex-col gap-5 px-6' >
            <div className='flex flex-col items-start gap-2 ' >
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}  className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg  block w-full lg:w-3/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>
            {
                modules.map((x,ind)=>(
                    <AddModule 
                        key={x.id}
                        name={x.id} 
                        moduleCount={modules} 
                        moduleChangeHandler={moduleChangeHandler} 
                        moduleInd={ind} 
                        AddTaskHandler={AddTaskHandler} 
                        taskChangeHandler={taskChangeHandler} 
                    />
                ))
            }

            <div className='flex justify-between mb-5 mr-5' >
                <button
                    className="border text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={AddModuleHandler}
                >
                    Add Module
                </button>
                
                <button
                    className="border bg-indigo-800 text-white text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // onClick={() => navigate('/addproject')}
                    onClick={submitHandler}
                >
                    Submit Project
                </button>
            </div>
            
        </form>
    </div>
  )
}

export default AddProjects