import { create } from "zustand";
import type { GitHubProject, Store } from "./interfaces";
import { getRepos } from "./services/github.ts";

export const useStore = create<Store>((set, get) => ({
  projects: [],
  projectSelected: {},
  filters: {
    range: 8,
    lang: "JavaScript",
  },
  selectProject: (project: GitHubProject) => {
    set({ projectSelected: project });
  },
  getProjects: async () => {
    try {
      const repos = await getRepos();

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

      const projectSelected = JSON.parse(localStorage.getItem("state")!);

      set({
        projects: reposFiltered,
        projectSelected: projectSelected ?? {},
      });

      localStorage.setItem("projects", JSON.stringify(reposFiltered));

      return reposFiltered;
    } catch (err) {
      console.log(err);
    }
  },
  persistState: () => {
    const { projectSelected } = get();

    localStorage.setItem("state", JSON.stringify(projectSelected));
  },
  filterProjects: (range = 8, lang = "JavaScript") => {
    const projects = JSON.parse(localStorage.getItem("projects")!);

    if (!projects) return;

    const projectsFiltered = projects
      .filter((repo: GitHubProject) => repo.language === lang)
      .slice(0, range);

    set({ projects: [...projectsFiltered], filters: { range, lang } });
  },
}));
