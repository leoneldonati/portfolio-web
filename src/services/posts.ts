import type { Post, Sketch } from "@scripts/posts";

type ApiError = {
  status: number;
  message: string;
};
export class ApiFn {
  private origin = "";
  errors: ApiError | null = null;
  constructor(origin: string) {
    this.origin = origin;
  }
  private resetErrors = () => {
    const timer = setTimeout(() => {
      this.errors = null;
    }, 4000);

    return () => clearTimeout(timer);
  };

  // obtener posts
  getPosts = async (q = 10) => {
    try {
      const res = await fetch(`${this.origin}/api/get-posts?q=${q}`);

      if (!res.ok) {
        const { status } = res;

        this.errors = {
          status,
          message: await res.json(),
        };
        return null;
      }

      const data = await res.json();

      return data.posts as Post[];
    } catch (err) {
      this.errors = {
        status: 500,
        message: `${err}`,
      };
      return null;
    } finally {
      if (this.errors) {
        this.resetErrors();
      }
    }
  };

  // obtener borradores

  getSketch = async () => {
    try {
      const res = await fetch(`${this.origin}/api/get-sketch`);

      if (!res.ok) {
        const { status } = res;

        this.errors = {
          status,
          message: await res.json(),
        };
        return null;
      }

      const data = await res.json();

      return data.borrors as Sketch[];
    } catch (err) {
      this.errors = {
        status: 500,
        message: `${err}`,
      };
      return null;
    } finally {
      if (this.errors) {
        this.resetErrors();
      }
    }
  };
}
