
import { useState, useEffect } from 'react';
import { parseGraphML } from '../utils/parseGraphML';
import { CustomNode, CustomEdge } from '../types/graphml';

type GraphType = {
    nodes: CustomNode[];
    edges: CustomEdge[];
    loading: boolean;
}

export function useGraphData(filePath: string) {
    const [graphData, setGraphData] = useState<GraphType>({
        nodes: [],
        edges: [],
        loading: false,
    });

    const fetchData = async () => {
        setGraphData((prev) => ({ ...prev, loading: true }));
        try {
            const response = await fetch(filePath);
            const xml = await response.text();
            const data = parseGraphML(xml);
            setGraphData((prev) => ({ ...prev, ...data }));
        } catch (error) {
            console.error('Error fetching graph data:', error);
        } finally {
            setGraphData((prev) => ({ ...prev, loading: false }));
        }
    };

    useEffect(() => {
        fetchData()
    }, [filePath]);

    return graphData;
}
