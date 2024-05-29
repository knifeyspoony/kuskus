export class ClusterConnection {
	public name: string;
	public url: string;
	constructor(name: string, url: string){
		this.name = name;
		this.url = url;
	}
}

export class ClusterMetadata {
	public connection: ClusterConnection;
	public databases: ClusterDatabase[];
	constructor(connection: ClusterConnection, databases?: ClusterDatabase[]){
		this.connection = connection;
		this.databases = databases || [];
	}		
}

export class ClusterDatabase {
	public name: string;
	public tables: ClusterTable[];
	constructor(name: string, tables?: ClusterTable[]){
		this.name = name;
		this.tables = tables || [];
	}
}

export class ClusterTable {
	public name: string;
	public columns: ClusterColumn[];
	constructor(name: string, columns?: ClusterColumn[]){
		this.name = name;
		this.columns = columns || [];
	}
}

export class ClusterColumn {
	public name: string;
	public type: string;
	constructor(name: string, type: string){
		this.name = name;
		this.type = type;
	}
}	