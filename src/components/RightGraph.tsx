"use client"
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useMemo, useState } from 'react';
import { useGraphData } from '@/hooks/useGraphData';
import { GraphCanvasRef, InternalGraphNode } from 'reagraph';
import { CustomNode } from '@/types/graphml';
import { ThreeEvent } from '@react-three/fiber';
import NodeProfileModal from '@/components/NodeProfileModal';
// import { GraphCanvas } from 'reagraph';

const GraphCanvas = dynamic(
    () => import('reagraph').then((mod) => mod.GraphCanvas),
    { ssr: false }
);


type RightGraphProps = {
    searchTerm: string;
}

const RightGraph: React.FC<RightGraphProps> = ({ searchTerm }) => {

    const [searchedNodes, setSearchedNodes] = useState<CustomNode[]>([]);
    const [hoveredNode, setHoveredNode] = useState<CustomNode | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedNode, setSelectedNode] = useState<CustomNode | null>(null);

    const filePath = "/interesting_candidates_v5.graphml";

    const { nodes: allNodes, edges: allEdges, loading } = useGraphData(filePath);


    useEffect(() => {
        searchNodes()
    }, [searchTerm]);

    const searchNodes = () => {

        if (searchTerm.trim()) {
            const searchLower = searchTerm.toLowerCase();
            const filteredNodes = allNodes.filter(node =>
                node.label?.toLowerCase().includes(searchLower) ||
                node.id?.toLowerCase().includes(searchLower)
            );
            setSearchedNodes(filteredNodes);
        } else {
            setSearchedNodes([]);
        }
    }


    const graphRef = useRef<GraphCanvasRef | null>(null);

    const fitItem = (id: string) => {
        graphRef.current?.centerGraph([id]);
        // graphRef.current?.resetControls();
        Array(5).fill(0).forEach(() => {
            graphRef.current?.zoomIn();
        });
        // graphRef.current?.zoomIn();
    }

    const handleNodePointerOver = (node: InternalGraphNode, event: ThreeEvent<PointerEvent>) => {
        // Find the corresponding node from our data
        const foundNode = allNodes.find(n => n.id === node.id);
        if (foundNode) {
            setHoveredNode(foundNode);
            setMousePosition({ x: event.clientX, y: event.clientY });
        }
    };

    const handleNodePointerOut = () => {
        setHoveredNode(null);
    };

    const handleNodeClick = (node: InternalGraphNode) => {
        const foundNode = allNodes.find(n => n.id === node.id);
        if (foundNode) {
            setSelectedNode(foundNode);
            setModalOpen(true);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedNode(null);
    };

    const renderPopup = () => {
        if (!hoveredNode) return null;

        return (
            <div 
                className="absolute z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-3 max-w-xs"
                style={{
                    left: mousePosition.x + 10,
                    top: mousePosition.y - 10,
                    pointerEvents: 'none'
                }}
            >
                <div className="font-semibold text-gray-800 mb-1">
                    {hoveredNode.label}
                </div>
                <div className="text-sm text-gray-600">
                    ID: {hoveredNode.id}
                </div>
                {hoveredNode.icon && (
                    <div className="mt-2">
                        <img 
                            src={hoveredNode.icon} 
                            alt={hoveredNode.label}
                            className="w-8 h-8 rounded-full object-cover"
                        />
                    </div>
                )}
            </div>
        );
    };

    const renderLoader = () => {
        if (loading) {
            return (
                <div className="flex flex-col  items-center justify-center 
                h-full absolute top-0 right-0 left-0 w-full bg-white z-10">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">Loading...</h2>
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            )
        }
    }

    const renderSearchResults = () => {
        if (searchedNodes.length > 0) {
            return searchedNodes.map((node, index) => (
                <div key={`${node.id}-${index}`} onClick={() => fitItem(node.id)}>
                    <div className="flex flex-col gap-2 items-center">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xs text-gray-800">{node.label.toLowerCase()}</p>
                        </div>
                    </div>
                </div>
            ))
        }
        return null;
    }

    const renderSearchInfo = () => {
        if (searchTerm.trim()) {
            return (
                <div>
                    <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-800">
                            Search results for "{searchTerm}": {searchedNodes.length} nodes found
                        </p>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2">
                        {renderSearchResults()}
                    </div>
                </div>
            );
        }
        return null;
    }

    return (
        <div className="bg-white rounded-xl p-4 shadow-sm flex-2 relative" >
            {renderLoader()}
            {renderSearchInfo()}

            <div style={{ position: "relative", width: '100%', height: '100%' }}>
                <GraphCanvas
                    layoutType="forceDirected3d"
                    nodes={allNodes}
                    edges={allEdges}
                    edgeArrowPosition='none'
                    ref={graphRef}
                    onNodePointerOver={handleNodePointerOver}
                    onNodePointerOut={handleNodePointerOut}
                    cameraMode="rotate"
                    onNodeClick={handleNodeClick}
                // selections={[nodes && nodes.length > 0 ? nodes[0].id : '']}

                >
                    <directionalLight position={[0, 5, -4]} intensity={1} />
                </GraphCanvas>


            </div>
            {renderPopup()}
            <NodeProfileModal open={modalOpen} node={selectedNode} onClose={closeModal} />
        </div>
    );
};

export default RightGraph;