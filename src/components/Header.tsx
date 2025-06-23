'use client'
import React, { useState } from 'react';

interface HeaderProps {
    firstName: string;
    lastName: string;
    avatarUrl: string;
}

const Header: React.FC<HeaderProps> = ({ firstName, lastName, avatarUrl }) => {
    const [isOn, setIsOn] = useState(false);
    const [isOnMap, setIsOnMap] = useState(false);

    return (
        <div className='flex flex-row gap-4'>
            <header className="flex items-center rounded-2xl justify-between p-4 px-7 bg-white shadow flex-3 box-border">
                <div className="flex items-center">
                    <img
                        src={avatarUrl}
                        alt="Avatar"
                        className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div className="flex flex-col">
                        <span className="text-2xl font-semibold text-gray-900 leading-tight">{firstName} {lastName}</span>
                        <span className="text-sm text-gray-500 leading-tight">Cardiologist</span>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="text-sm text-gray-600 mb-2">
                        My peer <span className="font-bold">232</span> Following <span className="font-bold">124</span>
                    </div>
                    <button className="bg-blue-700 hover:bg-blue-600 text-white px-14 py-2 rounded-xl transition-colors">
                        Create web
                    </button>
                </div>
            </header>
            <div className='flex flex-col justify-between flex-1 p-4 rounded-2xl bg-white shadow box-border'>
                
                <div className="flex items-center gap-2 ">
                    
                    <button
                        onClick={() => setIsOn(!isOn)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            isOn ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                isOn ? 'translate-x-6' : 'translate-x-1'
                            }`}
                        />
                    </button>
                    <span className="text-sm text-gray-600">Show connections</span>
                </div>

                <div className="flex items-center gap-2">
                    
                    <button
                        onClick={() => setIsOnMap(!isOnMap)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            isOnMap ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                isOnMap ? 'translate-x-6' : 'translate-x-1'
                            }`}
                        />
                    </button>
                    <span className="text-sm text-gray-600">Show connections on map</span>
                </div>
            </div>
        </div>
    );
};

export default Header; 