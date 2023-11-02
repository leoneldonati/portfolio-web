export interface Store {
  projects: GitHubProject[];
  projectSelected: GitHubProject;
  filters: {
    range: number,
    lang: string
  },
  selectProject: (project: GitHubProject) => void;
  getProjects: () => Promise<GitHubProject[]>;
  persistState: () => void;
  filterProjects: (range: number, lang: string) => void;
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