export type Asset = {
  secureUrl: string;
  publicId: string;
  width: number;
  height: number;
};
export interface Post {
  _id: string;
  title: string;
  topics: string[];
  content: string;
  images: Asset[];
  links: string[];
  likes: string[];
  author: {
    id: string;
    name: string;
    
  }
}

export type Sketch = Omit<Post, "likes">;

export const splitTopics = (topics: string) =>
  topics.split(",").map((topic) => topic.trim());

export const manageLargeContent = (content: string) => {
  const MAX_LENGTH = 100;

  if (content.length <= MAX_LENGTH) return [content];

  return content.split(".");
};
