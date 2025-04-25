import Link from 'next/link';

export const BlogCard = ({ blog }: { blog: any }) => {
    console.log(blog,"blogss")
  return (
    <Link href={`blogs/${blog.slug}`}>
      <div className="p-4 hover:bg-gray-100 cursor-pointer border-b">
        <p className="text-xs text-gray-500">Sent by Techs Krishna</p>
        <h2 className="font-bold text-lg mt-1">{blog.title}</h2>
        <p className="text-gray-600">{blog.summary}</p>
        <p className="text-sm text-gray-400 mt-2">{blog.date}</p>
      </div>
    </Link>
  );
};
