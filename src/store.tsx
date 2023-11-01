import { create } from "zustand";
import type { GitHubProject, Store } from "./interfaces";

export const useStore = create<Store>((set, get) => ({
  projects: [],
  projectSelected: {},
  selectProject: (project: GitHubProject) => {
    set({ projectSelected: project }) 
  },
  getProjects: async (quantity: Number) => {
    try {
      const res = await fetch(
        `https://api.github.com/users/leoneldonati/repos?per_page=${quantity}`
      );
      const repos = await res.json();

      const reposFiltered = repos.map((repo) => ({
        id: repo.id,
        name: repo.name,
        htmlUrl: repo.html_url,
        description: repo.description,
        createdAt: repo.created_at,
        pushedAt: repo.pushed_at,
        homepage: repo.homepage,
        stargazersCount: repo.stargazers_count,
        language: repo.language,
        forksCount: repo.forksCount,
      }));
      set({ projects: reposFiltered });

      return reposFiltered;
    } catch (err) {
      console.log(err);
    }
  },
}));