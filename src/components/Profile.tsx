'use client'
import { faHandshake, faStar } from '@fortawesome/free-regular-svg-icons'
import { faChartLine, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Profile: React.FC = () => {
    return (
        <div className='p-5 flex-1 bg-gray-100 rounded-2xl'>
            <div className="bg-white rounded-2xl p-3 shadow-sm flex-1  flex flex-col overflow-hidden">
                {/* Background cover */}
                <div className="w-full border border-gray-200 rounded-t-2xl h-48 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 relative"
                    style={{
                        backgroundImage: 'url(/images/world.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Avatar positioned on top of background */}
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                        <div className="relative">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center border-4 border-white shadow-lg">
                                <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                            </div>
                            {/* Doctor image overlay */}
                            <div className="absolute inset-0 w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-white flex items-center justify-center">
                                <img src="/images/profile1.jpeg" alt="Doctor" className="w-32 h-32 object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content area */}
                <div className="flex-1 flex flex-col items-center justify-center pt-20 px-6">
                    {/* Doctor name */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Dr. Sarah Johnson</h2>

                    {/* Tags */}
                    <div className="flex gap-2 mb-3">
                        <span className="bg-indigo-100 text-gray-500 px-3 items-center justify-center flex rounded-lg text-xs font-medium">
                            Cardiologist
                        </span>
                        <span className="bg-indigo-100 text-gray-500 px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                            29, Spain
                        </span>
                    </div>

                    <p className="text-gray-500 text-sm mb-3">Experienced and compassionate doctor specializing in cardiology.</p>

                    <div className="flex flex-row gap-2 mb-3">
                        <div className="flex flex-col items-center justify-center px-4">
                            <p className='text-gray-600 text-sm'>Peers</p>
                            <p className='text-gray-600 font-bold text-sm'>232</p>
                        </div>
                        <div className="border-l border-gray-200 h-full"></div>
                        <div className="flex flex-col items-center justify-center px-4">
                            <p className='text-gray-600 text-sm'>Following</p>
                            <p className='text-gray-600 font-bold text-sm'>124</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-2 rounded-xl transition-colors">
                            View Profile
                        </button>
                        <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-10 py-2 rounded-xl transition-colors">
                            Resume
                        </button>
                        <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-2 py-2 rounded-lg transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="19" r="1" />
                            </svg>
                        </button>
                    </div>
                </div>


            </div>
            <div className=" bg-white rounded-2xl p-4 mt-3 gap-3">
                <div className='flex flex-row gap-3'>
                    <div className="flex flex-col flex-1 gap-2 bg-gray-100 rounded-2xl p-6">
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faHandshake} className='text-gray-500 text-xl' />
                            <p className='text-gray-500 text-lg'>Patient Served</p>
                        </div>
                        <p className='text-gray-600 font-bold text-4xl'>1000</p>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faChartLine} className='text-green-500 text-sm' />
                            <p className='text-green-500 font-semibold text-sm'>+10</p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-2 bg-gray-100 rounded-2xl p-6">
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faStar} className='text-gray-500 text-xl' />
                            <p className='text-gray-500 text-lg'>Success Rate</p>
                        </div>
                        <p className='text-gray-600 font-bold text-4xl'>98%</p>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faChartLine} className='text-green-500 text-sm' />
                            <p className='text-green-500 font-semibold text-sm'>+5%</p>
                        </div>
                    </div>
                </div>

                <div className='mt-5 gap-3'>
                    <h2 className='text-gray-500 text-2xl font-bold'>About</h2>
                    <p className='text-gray-500 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quos.</p>
                    <p className='text-gray-500 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam lectus, velit, quisquam, quos aliquam. Vivamus sit amet dolor</p>
                </div>

                <div className='mt-4 gap-3'>
                    <h2 className='text-gray-500 text-2xl font-bold mb-2'>Education</h2>
                    <div className='flex flex-row gap-6 bg-gray-100 rounded-xl p-4'>
                        <div className='w-20 h-20 rounded-xl bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-600 flex items-center justify-center'>
                            <FontAwesomeIcon icon={faGraduationCap} className='text-white text-2xl' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-gray-500 text-2xl font-semibold'>Harvard Medical University</h3>
                            <p className='text-gray-500 text-lg'>Cardiology Degree</p>
                            <p className='text-gray-500 text-lg'>Specialization in Heart Health</p>
                            <p className='text-neutral-400 text-lg'>Sept 2010 - June 2014</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile