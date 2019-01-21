export interface Projectile {
  name?: string;
  runtime?: { name: string, version: string };
  capabilities?: Array<{ module: string; }>;
  clusterId?: string;
  projectName?: string;
  gitOrganization?: string;
  gitRepository?: string;
  deploymentLink?: string;
  repositoryLink?: string;
}
