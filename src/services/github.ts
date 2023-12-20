import type { GitHubProject } from "../interfaces";

const token = import.meta.env.PUBLIC_GITHUB;
const GITHUB_URL =
  "https://api.github.com/users/leoneldonati/repos?per_page=12";
const CONFIG = {
  headers: {
    Authorization: `token ${token}`,
  },
};
let repos: GitHubProject[] | null = null;

// obtener todos los repositorios
export async function getRepos(): Promise<GitHubProject[] | undefined> {
  try {
    const res = await fetch(GITHUB_URL, CONFIG);
    const data = await res.json();

    const reposFiltered = data
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        htmlUrl: repo.html_url,
        description: repo.description,
        createdAt: repo.created_at,
        pushedAt: repo.pushed_at,
        homepage: repo.home_page,
        stargazersCount: repo.stargazers_count,
        language: repo.language,
        forksCount: repo.forks_count,
        avatar: repo.owner.avatar_url

      }))
      .filter((repo: GitHubProject) => {
        const blackList = ["portfolio-web", "reset-css", "leoneldonati"];

        return !blackList.includes(repo.name.toLowerCase());
      });

    repos = reposFiltered;

    return reposFiltered;
  } catch (err) {
    console.error(err);
  }
}

// obtener un solo repositorio
export function getOneRepo(id: number): GitHubProject | undefined {
  return repos?.filter((repo) => repo.id === id)[0];
}
