import { useEffect } from "react";
import { useStore } from "../store.tsx";
import type { GitHubProject } from "../interfaces.ts";

export function ProjectsList() {
  const projects: GitHubProject[] = useStore((store) => store.projects);
  const getProjects = useStore((store) => store.getProjects);
  const selectProject = useStore((store) => store.selectProject);

  useEffect(() => {
    getProjects(8);
  }, []);
  return (
    <ul className="flex flex-col gap-4">
      {projects.map((project) => (
        <li
          key={project.id}
          onClick={() => selectProject(project)}
          className="w-full capitalize border rounded p-2 text-xl shadow shadow-[#444] bg-[#555] hover:scale-105 hover:shadow-lg hover:shadow-[#444] active:scale-100 transition text-slate-300  cursor-pointer"
        >
          {project.name}
        </li>
      ))}
    </ul>
  );
}
