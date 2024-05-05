export function setColorByLang (lang: string): string  {
  switch (lang) {
    case 'ts':
      return '#1E90FF';
    case 'js':
      return '#FFD700';
    case 'Astro':
      return '#DC143C';
    case 'html':
      return '#FF0000';
    default:
      return '#c8c8c8';
  }
}