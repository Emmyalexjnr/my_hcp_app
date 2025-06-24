import { CustomEdge, CustomNode, GraphMLEdge, GraphMLNode } from '@/types/graphml';
import { XMLParser } from 'fast-xml-parser';

const DEFAULT_ICON = '/images/profile1.jpeg';

interface GraphMLRaw {
    graphml: {
        graph: {
            node: GraphMLNode[] | GraphMLNode;
            edge?: GraphMLEdge[] | GraphMLEdge;
        };
    };
}

export const parseGraphML = (xmlString: string) => {
    const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '',
    });
    const json: GraphMLRaw = parser.parse(xmlString);

    const graph = json.graphml.graph;
    const rawNodes = Array.isArray(graph.node) ? graph.node : [graph.node];
    const rawEdges = graph.edge ? Array.isArray(graph.edge) ? graph.edge : [graph.edge] : [];



    const nodes: CustomNode[] = rawNodes.slice(0, 1000).map((node, i) => {
        const data = Array.isArray(node.data) ? node.data[0] : node.data;
        const label = data?.['#text'] ?? `Node ${i + 1}`;
        return {
            id: node.id,
            label,
            // icon: DEFAULT_ICON, // You can customize this based on node type if needed
        };
    });

    const edges: CustomEdge[] = rawEdges.slice(0, 1000).map((edge) => {
        const data = Array.isArray(edge.data) ? edge.data[0] : edge.data;
        const label = data?.['#text'] ?? 'Relation';
        return {
            id: `${edge.source}->${edge.target}`,
            source: edge.source,
            target: edge.target,
            label,
        };
    });

    console.log(nodes[0], edges[0]);
    return { nodes, edges };
}