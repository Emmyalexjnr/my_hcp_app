import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import SearchBar from '../../components/SearchBar'
import Profile from '@/components/Profile'

const Dashboard = () => {
    return (
        <div className="flex p-4 bg-gray-100 h-screen">
            <Sidebar />
            <div className="flex-1">
                <div className='md:ml-6'>
                    <Header firstName="John" lastName="Doe" avatarUrl="/window.svg" />
                    <SearchBar />
                </div>
                <div className='flex flex-col gap-4'>
                    <h4 className='text-3xl font-bold mt-4 text-gray-900 ml-6'>PeerSpace</h4>

                    <div className='bg-indigo-50 rounded-2xl p-4'>
                        <div className="flex gap-4 mt-6">
                            <Profile />
                            <div className="bg-white rounded-xl p-4 shadow-sm flex-2">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Right Container</h3>
                                <p className="text-gray-600">This is the bigger container on the right.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Dashboard