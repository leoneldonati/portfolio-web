import { useStore } from "../store.tsx";

export function ProjectInfo() {
  const projectSelected = useStore((state) => state.projectSelected);

  const name = projectSelected.name ? projectSelected.name : "-";
  const createdAt = projectSelected.createdAt
    ? new Date(projectSelected.createdAt).toLocaleDateString()
    : "-";
  const pushedAt = projectSelected.pushedAt
    ? new Date(projectSelected.pushedAt).toLocaleDateString()
    : "-";
  const description = projectSelected.description
    ? projectSelected.description
    : "-";
  const stargazersCount = projectSelected.stargazersCount
    ? projectSelected.stargazersCount
    : 0;
  const forksCount = projectSelected.forksCount
    ? projectSelected.forksCount
    : 0;
  const htmlUrl = projectSelected.htmlUrl ? projectSelected.htmlUrl : "";
  const language = projectSelected.language;
  const homepage = projectSelected.homepage;

  return (
    <article className="flex flex-col w-full gap-3 text-xl">
      <div className="flex flex-row justify-between border-b p-2">
        <h3>
          <strong>
            <span className="underline underline-offset-4">Name</span>
            {": " + name}
          </strong>
        </h3>

        <div className="flex flex-col items-end text-slate-300">
          <span>
            {" "}
            <strong>Created:</strong> {createdAt}
          </span>
          <span>
            <strong>Last push:</strong> {pushedAt}
          </span>
        </div>
      </div>

      <div className="p-2">
        <p className="text-left mb-2">
          <strong>Description:</strong> {description}
        </p>

        <div className="w-full flex justify-start">
          <ul className="border border-slate-400 bg-[#333] rounded-3xl flex flex-col justify-around items-start p-4">
            <li>Stars: {stargazersCount}</li>
            <li>Forks: {forksCount}</li>

            <li>Language: {language ? language : "None"}</li>

            {/* links */}
            <div className="flex flex-row gap-4 [&>li>a]:border [&>li>a]:border-[#ffbd33] [&>li>a]:block [&>li>a]:bg-[#ffbd33] [&>li>a]:text-black [&>li>a:hover]:scale-95 [&>li>a:active]:scale-100 [&>li>a]:transition [&>li>a]:rounded-xl [&>li>a]:p-2 mt-2 p-2">
              {htmlUrl && (
                <li>
                  <a
                    href={htmlUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    title={`Go to ${name}`}
                  >
                    Go to project
                  </a>
                </li>
              )}

              {homepage && (
                <li>
                  <a
                    href={homepage}
                    target="_blank"
                    rel="noreferrer noopener"
                    title={`Deploy from ${name}`}
                  >
                    Go to deploy
                  </a>
                </li>
              )}
            </div>
          </ul>
        </div>
      </div>
    </article>
  );
}
