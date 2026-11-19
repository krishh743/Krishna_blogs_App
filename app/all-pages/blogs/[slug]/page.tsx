import { blogsData } from "@/app/data/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import BlogContent from "@/app/components/text-editor/BlogContent";
import connectMongoDB from "@/app/lib/mongodb";
import Blog from "@/app/models/blogs";

function BackToBlogsLink() {
  return (
    <div className="mb-6">
      <Link
        href="/all-pages/categories-blogs"
        className="group inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
      >
        <FaArrowLeft
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:-translate-x-0.5"
        />
        <span>Back to blogs</span>
      </Link>
    </div>
  );
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sampleBlog = blogsData.find((b: { slug: string }) => b.slug === slug);

  if (sampleBlog) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <BackToBlogsLink />
        <h1 className="text-3xl font-bold mb-4">{sampleBlog.title}</h1>
        <img
          src={sampleBlog.image}
          alt={sampleBlog.title}
          className="rounded mb-4 w-full"
        />
        <p className="text-gray-500 text-sm mb-6">{sampleBlog.date}</p>
        <p className="text-lg leading-7">{sampleBlog.summary}</p>
      </div>
    );
  }

  await connectMongoDB();
  const blog = await Blog.findOne({ slug }).lean();
  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <BackToBlogsLink />
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      {blog.image && (
        <img src={blog.image} alt={blog.title} className="rounded mb-4 w-full" />
      )}
      <p className="text-gray-500 text-sm mb-6">
        {blog.createdAt.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
        {" by "}
        {blog.authorName}
      </p>
      <p className="text-lg leading-7 mb-8">{blog.summary}</p>
      <BlogContent content={blog.content} />
    </div>
  );
}
