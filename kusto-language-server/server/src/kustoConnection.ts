import {
  Client as KustoClient,
  KustoConnectionStringBuilder,
} from "azure-kusto-data";

export interface TokenResponse {
  verificationUrl: string;
  userCode: string;
}

// Resource string to kusto client. The azure-kusto-data package
// does not have typescript support.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const clients: Map<string, KustoClient> = new Map();

export function getClient(
  clusterUri: string,
): KustoClient | undefined {
  if (clients.has(clusterUri)) {
    return clients.get(clusterUri);
  } else {
    const kcsb = KustoConnectionStringBuilder.withUserPrompt(clusterUri);
    const kustoClient = new KustoClient(kcsb);
    clients.set(clusterUri, kustoClient);
    return kustoClient;
  }
}

export function getFirstOrDefaultClient(): {
  clusterUri: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  kustoClient: KustoClient | undefined;
} {
  if (clients.size > 0) {
    const key = clients.keys().next().value;
    return {
      clusterUri: key,
      kustoClient: clients.get(clients.keys().next().value),
    };
  }
  return {
    clusterUri: "none",
    kustoClient: undefined,
  };
}
