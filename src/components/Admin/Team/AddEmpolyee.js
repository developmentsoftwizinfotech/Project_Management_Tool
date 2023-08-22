import React, { useState } from 'react'
import { useMutation } from 'react-query';
import { signup } from '../../../utils/api/Admin/Signup';

const AddEmpolyee = ({userListFecth}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { mutateAsync : newUserData } = useMutation('signup',signup)

    const [newUser, setNewUser ] = useState({
        userName : '',
        email : '',
        address : '',
        password : '',
        department : '',
        role : '',
        designation : '',
        image : ''

    })

    const changeHandler = (e) =>{
        setNewUser(old => ({...old,[e.target.name] : e.target.value}))
    }
    const fileHandler = (e) =>{
        setNewUser(old => ({...old,[e.target.name] : e.target.files[0] }))
    }


    const submitHandler = async(e) =>{
        e.preventDefault();
        const { userName,email,address,password,department,designation,role,image } = newUser
        const formData = new FormData();
        formData.append("userName",userName)
        formData.append("email",email)
        formData.append("address", address)
        formData.append("password",password)
        formData.append("department",department)
        formData.append("designation",designation)
        formData.append("role",role)
        formData.append("image",image)
        
        await newUserData(newUser)
        .then((res)=>{
            console.log(res)
            setIsOpen(false)
            userListFecth()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <>
      <div className='flex justify-end mb-5 mr-5 ' >
        <button
            className="border text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setIsOpen(true)}
        >
            Add Member
        </button>
    </div>

    {
        isOpen ? 
        <>
        <div
            className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-5"
        >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                        Create User
                    </h3>
                </div>
                <form className="relative p-6  flex-auto  " onSubmit={submitHandler}  encType='multipart/form-data' >
                    <div className='flex flex-col items-start pt-2' >
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                        <input type="text"  name="userName" value={setNewUser.userName}  onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium"></span> </p>
                    
                    </div>
                    <div className='flex flex-col items-start pt-2' >
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="text" name="email" value={setNewUser.email} onChange={changeHandler}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example@gmail.com" required />
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium"></span> </p>
                    </div>
                    <div className='flex flex-col items-start pt-2' >
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="text" name="address" value={setNewUser.address} onChange={changeHandler}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Punjab,India" required />
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium"></span> </p>
                    </div>
                    <div className='flex flex-col items-start pt-2'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                        <select name="role" value={setNewUser.role} onChange={changeHandler}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required >
                            <option className='cursor-wait' selected>Choose a Role</option>
                            <option className='cursor-pointer' value="admin">Admin</option>
                            <option className='cursor-pointer' value="employee">Employee</option>
                        </select>
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium"></span> </p>
                    </div>
                    <div className='flex flex-col items-start pt-2' >
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                        <input type="text" name="department" value={setNewUser.department}  onChange={changeHandler}    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="department" required />
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium"></span> </p>
                    </div>
                    <div className='flex flex-col items-start pt-2' >
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Designation</label>
                        <input type="text" name="designation" value={setNewUser.designation}  onChange={changeHandler}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="designation" required />
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium"></span> </p>
                    </div>
                    <div className='flex flex-col items-start pt-2' >
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input name="password" type="password" value={setNewUser.password} onChange={changeHandler}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required />
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium"></span></p>
                    </div>
                    <div className='flex flex-col items-start pt-2'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Upload Image</label>
                        <input className="block w-full text-sm text-gray-900 border overflow-hidden border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" 
                            type="file" 
                            name='image'
                            // value={newUser.image}
                            onChange={fileHandler}
                        />
                    </div>
                        
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </button>
                        <button
                            className=" text-black active:bg-emerald-600  uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"  
                        >
                            Create
                        </button>
                    </div>
                    
                </form>
            </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        :
        null
    }
        
    </>
  )
}

export default AddEmpolyee