const token = import.meta.env.PUBLIC_GITHUB;

export async function getRepos () {
  try {
    const res = await fetch(
      `https://api.github.com/users/leoneldonati/repos`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    const repos = await res.json();

    return repos
  } catch (err) {

  }
}