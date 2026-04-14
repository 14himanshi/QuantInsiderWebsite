import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllBlogs } from "../lib/blogs";

export const metadata: Metadata = {
  title: "Blogs | Quant Insider",
  description:
    "Read Quant Insider articles on quantitative finance, algorithmic trading, and practical data-driven investing.",
};

function prettyDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <section className="max-w-6xl mx-auto px-4 pb-20 pt-10 sm:px-6">
      <div className="mb-10 text-center">
        <h1 className="gradient-title text-4xl sm:text-5xl">Quant Insider Blogs</h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-800">
          Deep dives on markets, quant research, and implementation notes from our team.
        </p>
      </div>

      {blogs.length === 0 ? (
        <div className="rounded-2xl border border-indigo-100 bg-white/70 px-6 py-12 text-center shadow-sm backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-indigo-900">No blogs yet</h2>
          <p className="mt-3 text-gray-700">
            Add markdown files in the <code className="rounded bg-indigo-50 px-2 py-1">blogs/</code> folder
            and they will appear here automatically.
          </p>
        </div>
      ) : (
        <div className="grid gap-7 md:grid-cols-2">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="overflow-hidden rounded-2xl border border-indigo-100 bg-white/80 shadow-md backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={`/blogs/${blog.slug}`}>
                <div className="relative h-56 w-full">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </Link>

              <div className="p-5">
                <p className="mb-2 text-xs uppercase tracking-wide text-indigo-600">
                  {prettyDate(blog.date)} - {blog.author}
                </p>
                <h2 className="text-2xl font-semibold text-indigo-950">
                  <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h2>
                <p className="mt-3 text-gray-700">{blog.excerpt}</p>
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
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="mt-5 inline-block font-semibold text-indigo-700 hover:text-indigo-900 hover:underline"
                >
                  Read full article
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
