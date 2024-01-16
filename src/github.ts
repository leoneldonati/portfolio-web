const URL = "https://api.github.com/users/leoneldonati/repos";
const CONFIG_FETCH = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
  },
};

export interface RepoInfo {
  name: string;
  description: string;
  projectUrl: string;
  lang: string;
  homepage: string;
  visibility: boolean;
  createdAt: Date;
  updatedAt: Date;
  pushedAt: Date;
}

const BLACK_LIST = ['reset-css', 'leoneldonati', 'portfolio-web']

export async function getRepos(): Promise<Array<RepoInfo> | void> {
  try {
    const res = await fetch(URL, CONFIG_FETCH);

    const repos = await res.json();

    const projects = repos.map((repos: any) => ({
      name: repos.name,
      description: repos.description,
      projectUrl: repos.html_url,
      lang: repos.language,
      homepage: repos.homepage,
      visibility: repos.private,
      createdAt: repos.created_at,
      updatedAt: repos.updated_at,
      pushedAt: repos.pushed_at,
    })).filter((repos: RepoInfo) => !BLACK_LIST.includes(repos.name.toLowerCase()));

    return projects;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
}
