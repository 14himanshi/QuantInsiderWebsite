import matter from "gray-matter";
import { promises as fs } from "fs";
import path from "path";

const BLOGS_DIR = path.join(process.cwd(), "blogs");

export type BlogFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage: string;
  tags?: string[];
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  content: string;
};

export type BlogPreview = BlogFrontmatter & {
  slug: string;
};

async function readBlogsDirectory(): Promise<string[]> {
  try {
    return await fs.readdir(BLOGS_DIR);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const fileNames = await readBlogsDirectory();
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

export async function getAllBlogs(): Promise<BlogPreview[]> {
  const slugs = await getAllBlogSlugs();
  const blogs: BlogPreview[] = [];

  for (const slug of slugs) {
    const post = await getBlogBySlug(slug);
    if (!post) {
      continue;
    }

    blogs.push({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      author: post.author,
      coverImage: post.coverImage,
      tags: post.tags,
    });
  }

  return blogs.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const markdownPath = path.join(BLOGS_DIR, `${slug}.md`);

  try {
    const fileContents = await fs.readFile(markdownPath, "utf-8");
    const { data, content } = matter(fileContents);

    const frontmatter = data as Partial<BlogFrontmatter>;
    if (
      !frontmatter.title ||
      !frontmatter.excerpt ||
      !frontmatter.date ||
      !frontmatter.author ||
      !frontmatter.coverImage
    ) {
      throw new Error(`Missing required frontmatter in ${slug}.md`);
    }

    return {
      slug,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      date: frontmatter.date,
      author: frontmatter.author,
      coverImage: frontmatter.coverImage,
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      content,
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }
    throw error;
  }
}
