"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterColumn = exports.ClusterTable = exports.ClusterDatabase = exports.ClusterMetadata = exports.ClusterConnection = void 0;
class ClusterConnection {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}
exports.ClusterConnection = ClusterConnection;
class ClusterMetadata {
    constructor(connection, databases) {
        this.connection = connection;
        this.databases = databases || [];
    }
}
exports.ClusterMetadata = ClusterMetadata;
class ClusterDatabase {
    constructor(name, tables) {
        this.name = name;
        this.tables = tables || [];
    }
}
exports.ClusterDatabase = ClusterDatabase;
class ClusterTable {
    constructor(name, columns) {
        this.name = name;
        this.columns = columns || [];
    }
}
exports.ClusterTable = ClusterTable;
class ClusterColumn {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
exports.ClusterColumn = ClusterColumn;
//# sourceMappingURL=clusterMetadata.js.map