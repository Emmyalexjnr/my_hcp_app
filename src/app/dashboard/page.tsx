'use client'
import React, { useState } from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import SearchBar from '../../components/SearchBar'
import Profile from '@/components/Profile'
import RightGraph from '@/components/RightGraph'

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="flex p-4 bg-gray-100 h-screen">
            <Sidebar />
            <div className="flex-1">
                <div className='md:ml-6'>
                    <Header firstName="John" lastName="Doe" avatarUrl="/images/profile1.jpeg" />
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                <div className='flex flex-col gap-4'>
                    <h4 className='text-3xl font-bold mt-4 text-gray-900 ml-6'>PeerSpace</h4>

                    <div className='bg-indigo-50 rounded-2xl p-4'>
                        <div className="flex gap-4">
                            <Profile />
                            <RightGraph searchTerm={searchTerm} />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Dashboard