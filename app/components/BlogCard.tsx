import Link from "next/link";

export const BlogCard = ({ blog }: { blog: any }) => {
  return (
    <Link href={`blogs/${blog.slug}`}>
      <div className="p-4 hover:bg-orange-100 cursor-pointer border-b">
        <div className="flex items-center space-x-2 mb-1">
          <img
            src="/images/profile-krishna.png"
            alt="Author Profile"
            className="w-6 h-6 rounded-full"
          />

          <p className="text-xs text-gray-500">Sent by Techs Krishna</p>
        </div>
        <h2 className="font-bold text-lg mt-1">{blog.title}</h2>
        <p className="text-gray-600">
          {blog.summary.split(" ").slice(0, 20).join(" ")}..
        </p>
        <p className="text-sm text-gray-400 mt-2">{blog.date}</p>
      </div>
    </Link>
  );
};
