

// projecto de github
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

// response emailjs
export interface EmailRes {
  text: string;
  status: number;
}