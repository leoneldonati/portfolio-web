const apiUrl = "https://api.github.com/users/leoneldonati/repos";

export async function getNumberOfRepos(): Promise<number> {
  try {
    const res = await fetch(apiUrl, {
      method: "get",
      headers: {
        Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
      },
    });

    if (!res.ok) return 0

    const repos = await res.json() as []

    return repos.length
  } catch (e) {
    console.error(e)
    return 0
  }
}
