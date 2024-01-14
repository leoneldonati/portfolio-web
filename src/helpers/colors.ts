export function setColorByLang (lang: string): string  {
  switch (lang) {
    case 'TypeScript':
      return '#1E90FF';
    case 'JavaScript':
      return '#FFD700';
    case 'Astro':
      return '#DC143C';
    case 'HTML':
      return '#FF0000';
    default:
      return '#c8c8c8';
  }
}