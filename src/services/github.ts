import type { GitHubProject } from "../interfaces";

const token = import.meta.env.PUBLIC_GITHUB;
const GITHUB_URL = 'https://api.github.com/users/leoneldonati/repos?per_page=11'
const CONFIG = {
  headers: {
    Authorization: `token ${token}`,
  },
}
let repos: GitHubProject[] | null = null;

// obtener todos los repositorios
export async function getRepos (): Promise<GitHubProject[] | undefined> {
  try {
    const res = await fetch(
      GITHUB_URL,
      CONFIG
    );
    const data = await res.json();

    const reposFiltered = data.map(repos => ({
      id: repos.id,
      name: repos.name,
      htmlUrl: repos.html_url,
      description: repos.description,
      createdAt: repos.created_at,
      pushedAt: repos.pushed_at,
      homepage:  repos.home_page,
      stargazersCount: repos.stargazers_count,
      language: repos.language,
      forksCount: repos.forks_count
    }))
    
    repos = reposFiltered
    
    return reposFiltered
  } catch (err) {
    console.error(err)
  }
}

// obtener un solo repositorio
export function getOneRepo (id: number): GitHubProject | undefined {
  return repos?.filter(repo => repo.id === id)[0]
}