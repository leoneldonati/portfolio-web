export function setColorByLang (lang: string): string {
  switch (lang) {
    case 'JavaScript':
      return '#ffbd33'
    case 'Astro':
      return '#DC143C'
    case 'TypeScript':
      return '#00008B'
    default:
      return '#555'
  }
}