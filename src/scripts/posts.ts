type Image = {
  secureUrl: string;
  publicId: string;
}
export interface Post {
  id: string;
  title: string;
  topics: string;
  content: string;
  images: Image[] | null;
  links: string | null;
  likes: string;
}

export type Sketch = Omit<Post, 'likes'>;

export const getTopicsArray = (topics: string) => topics.split(',')

export const manageLargeContent = (content: string) => {
  const MAX_LENGTH = 100;

  if (content.length <= MAX_LENGTH) return [content]

 return content.split('.')
}