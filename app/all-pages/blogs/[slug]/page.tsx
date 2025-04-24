import { blogsData } from "@/app/data/blogs";
import Link from "next/link";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const blog = blogsData.find((b: { slug: string; }) => b.slug === params.slug);

  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
         <div className="flex justify-end mb-4">
        <Link
          href="/all-pages/categories-blogs"
          className="text-sm text-blue-500 hover:underline border border-blue-500 px-3 py-1 rounded"
        >
          ← Back to Blogs
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="rounded mb-4 w-full" />
      <p className="text-gray-500 text-sm mb-6">{blog.date}</p>
      <p className="text-lg leading-7">
       {blog?.summary}
      </p>
    </div>
  );
}
