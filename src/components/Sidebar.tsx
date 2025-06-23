'use client'
import React, { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4-8l2 2m-2-2v8m0 0h-4m4 0h4" /></svg>
  ) },
  { name: 'Profile', href: '#', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" /></svg>
  ) },
  { name: 'Settings', href: '#', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ) },
  { name: 'Logout', href: '#', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" /></svg>
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
        className="hidden md:block fixed top-4 left-4 z-30 p-2 bg-gray-200 rounded"
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Collapse sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-20 transform transition-transform duration-200 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:block
          ${collapsed ? 'w-16' : 'w-48'}
          rounded-lg`}
      >
        <div className="flex flex-col h-full p-2 pt-12 md:pt-6">
          <div className={`mb-8 text-2xl font-bold text-gray-800 transition-all duration-200 ${collapsed ? 'text-center text-lg' : ''}`}>{!collapsed ? 'My App' : 'MA'}</div>
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