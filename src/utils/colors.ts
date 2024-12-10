export const colorFrom = (tag: string): string => {
  if (tag === "Astro") return "#DC143C"
  if (tag === "TypeScript") return "#0000FF"
  if (tag === "JavaScript") return "#FFFF00"
  if (tag === "React") return "#4682B4"
  return "#6A5ACD"
}