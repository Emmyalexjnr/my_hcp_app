"use client"
import Image from 'next/image';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { parseGraphML } from '@/utils/parseGraphML';
import { useGraphData } from '@/hooks/useGraphData';
import { GraphCanvasRef } from 'reagraph';
// import { GraphCanvas } from 'reagraph';

const GraphCanvas = dynamic(
    () => import('reagraph').then((mod) => mod.GraphCanvas),
    { ssr: false }
);

const nodes = [
    {
        id: "n-1",
        label: "1",
        icon: "/images/profile1.jpeg",

    },
    {
        id: "n-2",
        label: "2",
        icon: "/images/profile1.jpeg"
    },
    {
        id: "n-3",
        label: "3",
        icon: "/images/profile1.jpeg"
    },
    {
        id: "n-4",
        label: "4",
        icon: "/images/profile1.jpeg"
    }
];


const edges = [
    {
        id: "1->2",
        source: "n-1",
        target: "n-2",
        label: "Edge 1-2"
    },
    {
        id: "1->3",
        source: "n-1",
        target: "n-3",
        label: "Edge 1-3"
    },
    {
        id: "1->4",
        source: "n-1",
        target: "n-4",
        label: "Edge 1-4"
    }
];


const RightGraph: React.FC = () => {

    const filePath = "/interesting_candidates_v5.graphml";

    const { nodes, edges, loading } = useGraphData(filePath);


    const graphRef = useRef<GraphCanvasRef | null>(null);
    const fitView = () => {
        // graphRef.current?.fitNodesInView();
        graphRef.current?.centerGraph([nodes[0].id, nodes[1].id]);
        graphRef.current?.zoomIn();
        
    };

    const renderLoader = () => {
        if (loading) {
            return (
                <div className="flex flex-col items-center justify-center h-full">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">Loading...</h2>
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            )
        }

    }

    return (
        <div className="bg-white rounded-xl p-4 shadow-sm flex-2" >
            {renderLoader()}
            <h2 className="text-xl font-bold text-gray-700 mb-4">Occupation Network</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={fitView}>Fit View</button>
            <div style={{ position: "fixed", width: '57%', height: '70%', border: '1px solid black' }}>
                <GraphCanvas
                    layoutType="forceDirected3d"
                    nodes={nodes}
                    edges={edges}
                    edgeArrowPosition='none'
                    ref={graphRef}
                    sizingType="centrality"
                    cameraMode="rotate"
                    // selections={[nodes && nodes.length > 0 ? nodes[0].id : '']}

                // renderNode={({ size, color, opacity }) => (
                //     <group>
                //       <mesh>
                //         <torusKnotGeometry attach="geometry" args={[size, 1.25, 50, 8]} />
                //         <meshBasicMaterial
                //           attach="material"
                //           color={color}
                //           opacity={opacity}
                //           transparent
                //         />
                //       </mesh>
                //     </group>
                //   )}
                >
                    <directionalLight position={[0, 5, -4]} intensity={1} />
                </GraphCanvas>


            </div>
        </div>
    );
};

type NodeCardProps = {
    // url: string
}

const NodeCard = () => {
    return (
        <div>
            {/* <Image src={url} alt="Node" width={40} height={40} /> */}
            <h3>Node</h3>
        </div>
    )
}

export default RightGraph;