export interface GraphMLNode {
    id: string;
    data?: GraphMLData | GraphMLData[];
}

export interface GraphMLEdge {
    source: string;
    target: string;
    data?: GraphMLData | GraphMLData[];
}

export interface GraphMLData {
    '#text'?: string;
    key?: string;
}

export interface ParsedNode {
    id: string;
    group: string;
}

export interface ParsedLink {
    source: string;
    target: string;
    label: string;
}

export interface CustomNode {
    id: string;
    label: string;
    icon?: string;
}

export interface CustomEdge {
    id: string;
    source: string;
    target: string;
    label: string;
}