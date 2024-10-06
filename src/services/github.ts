export async function getRepos(n?: number) {
  const res = await fetch(
    `https://api.github.com/users/leoneldonati/repos?q=${n ?? 10}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
      },
    }
  );

  if (!res.ok)
    return {
      ok: res.ok,
      error: await res.json(),
    };

  const WHITE_LIST = ["chatly", "books-app", "portfolio-web", "ask"];
  const filteredRepos = [...(await res.json())].filter((repo) =>
    WHITE_LIST.includes(repo.name)
  );

  return {
    ok: res.ok,
    data: filteredRepos,
  };
}
