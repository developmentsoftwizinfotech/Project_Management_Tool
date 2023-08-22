import React, { useState } from "react";
import bg from '../assets/loginbg.jpg'
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { login } from "../utils/api/Admin/login";

const Login = () => {

  const navigate = useNavigate();
  const [userData, setUserData ] = useState({
    email : '',password : ''
  })
  const { mutateAsync : userDetails } = useMutation('login',login)

  const changeHandler = (e) =>{
    setUserData((old)=>({...old,[e.target.name] : e.target.value}))

  }

  const LoginHandler = async() =>{
    await userDetails(userData)
    .then((res)=>{
      localStorage.setItem('token', res.auth)
      localStorage.setItem('userId', res.user._id)
      res.user.role === 'employee' ? navigate('/home') : navigate('/dashboard')
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  return (
    <div className=' flex justify-center items-center -z-10  h-screen   bg-no-repeat bg-cover ' style={{ backgroundImage : `url(${bg})` }} >
      <div className="flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
        <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-4 grid h-28 place-items-center">
          <h3 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-white">
            Sign In
          </h3>
        </div>
        <div className="p-6 flex flex-col gap-4">
          <div className="relative w-full min-w-[200px] h-12">
            <input
              type="email"
              onChange={changeHandler}
              value={userData.email}
              name="email"
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 border-blue-gray-200 focus:border-blue-500"
              placeholder=" "
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content[' '] after:block after:w-full after:absolute after:-bottom-1.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.875] text-blue-gray-500 peer-focus:text-blue-500 after:border-blue-500 peer-focus:after:border-blue-500">
              Email
            </label>
          </div>
          <div className="relative w-full min-w-[200px] h-12">
            <input
              type="password"
              onChange={changeHandler}
              value={userData.password}
              name="password"
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 border-blue-gray-200 focus:border-blue-500"
              placeholder=" "
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content[' '] after:block after:w-full after:absolute after:-bottom-1.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.875] text-blue-gray-500 peer-focus:text-blue-500 after:border-blue-500 peer-focus:after:border-blue-500">
              Password
            </label>
          </div>
          <div className="-ml-2.5">
            <div className="inline-flex items-center">
              <label
                className="text-gray-700 font-light select-none cursor-pointer mt-px"
                
              >
                Forgot password
              </label>
            </div>
          </div>
        </div>
        <div className="p-6 pt-0">
          <button
            className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] block w-full"
            type="button"
            onClick={LoginHandler}
          >
            Sign In
          </button>
        
        </div>
      </div>

      <div className="absolute bottom-5 left-5" >
        <p className="text-emerald-50 " >© 2023, made with  by Creative Tim for a better web.</p>
      </div>
    </div>
  );
};

export default Login;
