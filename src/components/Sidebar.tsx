'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faBell, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faGear, faHouse, faRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const navLinks = [
  { name: 'Search', href: '#', icon: (
    <FontAwesomeIcon icon={faSearch} className='text-gray-500' />
  ) },
  { name: 'Home', href: '#', icon: (
    <FontAwesomeIcon icon={faHouse} className='text-gray-500' />
  ) },
  { name: 'Profile', href: '#', icon: (
    <FontAwesomeIcon icon={faUser} className='text-gray-500' />
  ) },
  { name: 'Messages', href: '#', icon: (
    <FontAwesomeIcon icon={faEnvelope} className='text-gray-500' />
  ) },
  { name: 'Notifications', href: '#', icon: (
    <FontAwesomeIcon icon={faBell} className='text-gray-500' />
  ) },
  { name: 'Settings', href: '#', icon: (
    <FontAwesomeIcon icon={faGear} className='text-gray-500' />
  ) },
  { name: 'Logout', href: '#', icon: (
    <FontAwesomeIcon icon={faRightFromBracket} className='text-gray-500' />
  ) },
];

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 p-2 bg-gray-200 rounded"
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Desktop collapse button */}
      
      <button
        className="hidden md:block fixed top-4 left-4 z-30 p-2 px-3 bg-white rounded"
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Collapse sidebar"
      >
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-20 transform transition-transform duration-200 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:block
          ${collapsed ? 'w-16' : 'w-48'}
          rounded-lg`}
      >
        <div className="flex flex-col h-full p-2 pt-12 md:pt-6 mt-10">
          {/* <div className={`mb-8 text-2xl font-bold text-gray-800 transition-all duration-200 ${collapsed ? 'text-center text-lg' : ''}`}>{!collapsed ? 'My App' : 'MA'}</div> */}
          <nav className="flex flex-col gap-2">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 text-gray-700 hover:bg-gray-100 px-2 py-2 rounded transition ${collapsed ? 'justify-center' : ''}`}
              >
                {link.icon}
                {!collapsed && <span>{link.name}</span>}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar; 