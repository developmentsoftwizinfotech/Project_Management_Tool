import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import {   useQuery } from 'react-query';
import { userDetails } from '../../../utils/api/Admin/Team';


const Profile = () => {

    const id = localStorage.getItem('userId')
    const { data } = useQuery('userDetails',userDetails.bind(this,id))

  return (
        <main className="profile-page absolute mt-48 -z-10 ">
            
            <section className="relative py-16 bg-blueGray-200">
                <div className="container mx-auto px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md rounded-lg -mt-64">
                    <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        
                        <img src={`http://127.0.0.1:8080/uploads/${data?.image}`} 

                        className=" mx-auto mb-4  overflow-hidden  rounded-full shadow-lg dark:shadow-black/20" alt="" style={{maxWidth: '10rem',height : '10rem', objectFit : 'cover'}} />

                        </div>
                        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        </div>
                        <div className="w-full lg:w-4/12 px-4 lg:order-1">
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                        {data?.userName}
                        </h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                        Los Angeles, California
                        </div>
                        <div className="mb-2 text-blueGray-600 mt-10">
                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>{data?.designation}
                        </div>
                        <div className="mb-2 text-blueGray-600">
                        <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>{data?.role} - {data?.department}
                        </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-9/12 px-4">
                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                An artist of considerable range, Jenna the name taken by
                                Melbourne-raised, Brooklyn-based Nick Murphy writes,
                                performs and records all of his own music, giving it a
                                warm, intimate feel with a solid groove structure. An
                                artist of considerable range.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                            Current Project
                        </div>
                        <div role="list" className="mx-auto mt-16 px-4 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">

                        <div className="rounded-2xl border border-gray-200 p-8   ">
                                <FaMobileAlt />
                                <h3 className="mt-6 font-semibold text-gray-900">Invest any amount</h3>
                                <p className="mt-2 text-gray-700">Whether it’s $1 or $1,000,000, we can put your money to work for you.</p>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
                </div>
                <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            
            </footer>
            </section>
            </main>
  )
}

export default Profile