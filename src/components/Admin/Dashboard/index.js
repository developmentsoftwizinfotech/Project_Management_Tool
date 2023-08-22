import React from 'react'
import ArrowIcon from '../../Common/ArrowIcon'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <div className='' >
        <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                <a onClick={()=>navigate('/dashboard')} className="inline-flex items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    Dashboard
                </a>
                </li>  
            </ol>
        </nav>
    </div>
  )
}

export default Dashboard