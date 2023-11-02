import { useEffect } from "react";
import { useStore } from "../store.tsx";
import type { GitHubProject } from "../interfaces.ts";
import './ProjectsList.css'


export function ProjectsList() {
  const projects: GitHubProject[] = useStore((store) => store.projects);
  const getProjects = useStore((store) => store.getProjects);
  const selectProject = useStore((store) => store.selectProject);
  const persistState = useStore((store) => store.persistState);
  const filters = useStore((state) => state.filters);

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="w-full h-full">
      <span className="text-xl">
        Here are <strong>{projects.length}</strong> projects writed in{" "}
        <b>{filters.lang}</b>
      </span>
      <ul className="flex flex-col gap-4 mt-5 h-[500px] overflow-x-hidden w-[90%] mx-auto overflow-y-scroll">
        {projects.map((project) => (
          <li
            key={project.id}
            onClick={() => {
              selectProject(project);
              persistState();
            }}
            className="w-full capitalize border rounded p-2 text-xl shadow shadow-[#444] bg-[#555] hover:scale-105 hover:shadow-lg hover:shadow-[#444] active:scale-100 transition text-slate-300  cursor-pointer"
          >
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
