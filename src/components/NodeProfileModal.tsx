import React from 'react';
import { CustomNode } from '@/types/graphml';

interface NodeProfileModalProps {
    open: boolean;
    node: CustomNode | null;
    onClose: () => void;
}

const NodeProfileModal: React.FC<NodeProfileModalProps> = ({ open, node, onClose }) => {
    if (!open || !node) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <div className="bg-transparent border border-gray-300 rounded-2xl shadow-lg p-0 max-w-2xl w-full relative overflow-hidden">
                <button
                    className="absolute top-2 right-2 text-gray-500 bg-white h-15 w-15 rounded-full p-2 hover:text-gray-700 text-5xl z-10"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                {/* Profile Card Design */}
                <div className="bg-white rounded-2xl p-3 shadow-sm flex-1 flex flex-col overflow-hidden">
                    {/* Background cover */}
                    <div className="w-full border border-gray-200 rounded-t-2xl h-40 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 relative"
                        style={{
                            backgroundImage: 'url(/images/world.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* Avatar positioned on top of background */}
                        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2">
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center border-4 border-white shadow-lg">
                                    <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                    </svg>
                                </div>
                                {/* Node image overlay */}
                                {node.icon && (
                                    <div className="absolute inset-0 w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-white flex items-center justify-center">
                                        <img src={node.icon} alt={node.label} className="w-24 h-24 object-cover" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Content area */}
                    <div className="flex-1 flex flex-col items-center justify-center pt-16 px-6">
                        {/* Node name */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{node.label}</h2>
                        {/* Tags (example, you can adapt to your data) */}
                        <div className="flex gap-2 mb-3">
                            <span className="bg-indigo-100 text-gray-500 px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                                Node ID: {node.id}
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm mb-3">This is a network node. You can add more details here.</p>
                        {/* Example stats */}
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
                        <div className="flex gap-3 mb-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-xl transition-colors">
                                View Profile
                            </button>
                            <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-8 py-2 rounded-xl transition-colors">
                                Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NodeProfileModal; 