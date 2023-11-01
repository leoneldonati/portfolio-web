export interface Store {
  projects: GitHubProject[];
  projectSelected: GitHubProject;
  selectProject: (project: GitHubProject) => void;
  getProjects: (quantity: Number) => Promise<GitHubProject[]>;
}
export interface GitHubProject {
  id: number;
  name: string;
  htmlUrl: string;
  description: string | null;
  createdAt: string;
  pushedAt: string;
  homepage: string | null;
  stargazersCount: number;
  language: string;
  forksCount: number;
}