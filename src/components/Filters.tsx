import { useEffect, useState } from "react";
import { useStore } from "../store";

export default function Filters() {
  const [filters, setFilters] = useState({
    range: 8,
    lang: "JavaScript",
  });
  const filterProjects = useStore((state) => state.filterProjects);

  useEffect(() => {
    filterProjects(filters.range, filters.lang);
    
  }, [filters]);
  return (
    <div className="flex flex-col gap-2 w-full border border-slate-400 p-4 rounded-xl">
      <span className="text-[#fff] text-2xl underline underline-offset-4">
        <strong>Filter projects</strong>
      </span>

      <div className="flex flex-row justify-evenly items-center">
        <label htmlFor="range" className="flex flex-col">
          <span className="text-white">Quantity projects {filters.range}</span>
          <input
            id="range"
            type="range"
            max="10"
            min="2"
            
            onChange={(e) =>
              setFilters({ ...filters, range: Number(e.target.value) })
            }
            value={filters.range}
          />
        </label>

        <label htmlFor="lang">
          <select
            id="lang"
            onChange={(e) => setFilters({ ...filters, lang: e.target.value })}
            className="rounded-lg p-2"
          >
            <option value="JavaScript">JavaScript</option>
            <option value="Astro">Astro</option>
            <option value="TypeScript">TypeScript</option>
          </select>
        </label>
      </div>
    </div>
  );
}
