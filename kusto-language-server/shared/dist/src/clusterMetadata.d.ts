export declare class ClusterConnection {
    name: string;
    url: string;
    constructor(name: string, url: string);
}
export declare class ClusterMetadata {
    connection: ClusterConnection;
    databases: ClusterDatabase[];
    constructor(connection: ClusterConnection, databases?: ClusterDatabase[]);
}
export declare class ClusterDatabase {
    name: string;
    tables: ClusterTable[];
    constructor(name: string, tables?: ClusterTable[]);
}
export declare class ClusterTable {
    name: string;
    columns: ClusterColumn[];
    constructor(name: string, columns?: ClusterColumn[]);
}
export declare class ClusterColumn {
    name: string;
    type: string;
    constructor(name: string, type: string);
}
