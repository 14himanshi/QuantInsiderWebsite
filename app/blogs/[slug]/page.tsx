import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidElement, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllBlogSlugs, getBlogBySlug } from "../../lib/blogs";

type BlogDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type HeadingItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

function prettyDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function createUniqueSlugger() {
  const counts = new Map<string, number>();
  return (text: string) => {
    const baseSlug = slugify(text) || "section";
    const currentCount = counts.get(baseSlug) ?? 0;
    counts.set(baseSlug, currentCount + 1);

    if (currentCount === 0) {
      return baseSlug;
    }

    return `${baseSlug}-${currentCount}`;
  };
}

function extractHeadings(markdown: string): HeadingItem[] {
  const toSlug = createUniqueSlugger();
  const headings: HeadingItem[] = [];

  for (const line of markdown.split("\n")) {
    const match = line.match(/^(##|###)\s+(.+)$/);
    if (!match) {
      continue;
    }

    const level = match[1].length as 2 | 3;
    const text = match[2].trim();
    headings.push({
      id: toSlug(text),
      text,
      level,
    });
  }

  return headings;
}

function getTextFromReactNode(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getTextFromReactNode).join("");
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return getTextFromReactNode(node.props.children);
  }

  return "";
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Quant Insider",
    };
  }

  return {
    title: `${blog.title} | Quant Insider Blogs`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [{ url: blog.coverImage }],
      type: "article",
    },
  };
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const tableOfContents = extractHeadings(blog.content);
  const toHeadingSlug = createUniqueSlugger();
  const hasTableOfContents = tableOfContents.length > 0;

  return (
    <article className="max-w-6xl mx-auto px-4 pb-20 pt-10 sm:px-6">
      <Link href="/blogs" className="inline-flex items-center text-indigo-700 hover:underline">
        Back to Blogs
      </Link>

      <header className="mt-6">
        <p className="text-xs uppercase tracking-wider text-indigo-600">
          {prettyDate(blog.date)} - {blog.author}
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-indigo-950 sm:text-5xl">
          {blog.title}
        </h1>
        <p className="mt-4 text-lg text-gray-700">{blog.excerpt}</p>
        {blog.tags && blog.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <div className="relative mt-8 h-[260px] overflow-hidden rounded-2xl sm:h-[420px]">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 900px"
          priority
        />
      </div>

      <div
        className={`mt-10 ${
          hasTableOfContents ? "lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start lg:gap-8" : ""
        }`}
      >
        {hasTableOfContents ? (
          <aside className="mb-6 lg:sticky lg:top-28 lg:mb-0">
            <nav className="rounded-2xl border border-indigo-100 bg-white/85 p-5 shadow-sm backdrop-blur-sm sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
                Table of Contents
              </p>
              <ul className="mt-3 space-y-2">
                {tableOfContents.map((heading) => (
                  <li key={heading.id} className={heading.level === 3 ? "ml-4" : ""}>
                    <a
                      href={`#${heading.id}`}
                      className="text-sm text-indigo-900 hover:text-indigo-600 hover:underline"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        ) : null}

        <div
          className={`blog-content rounded-2xl border border-indigo-100 bg-white/85 p-5 shadow-sm backdrop-blur-sm sm:p-8 ${
            hasTableOfContents ? "" : "mx-auto max-w-4xl"
          }`}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ node: _node, className, children, ...props }) => {
                const id = toHeadingSlug(getTextFromReactNode(children));
                return (
                  <h2 id={id} className={`scroll-mt-28 ${className ?? ""}`.trim()} {...props}>
                    {children}
                  </h2>
                );
              },
              h3: ({ node: _node, className, children, ...props }) => {
                const id = toHeadingSlug(getTextFromReactNode(children));
                return (
                  <h3 id={id} className={`scroll-mt-28 ${className ?? ""}`.trim()} {...props}>
                    {children}
                  </h3>
                );
              },
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
