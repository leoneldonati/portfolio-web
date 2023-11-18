import { create } from 'zustand'
import type { ProjectStore } from './interfaces'

export const useProjectsStore = create<ProjectStore>((set) => ({
  selectedProject: {},
  setSelectedProject: (selectedProject) => set({ selectedProject })
}))