"use client";

import { BlogCard } from "@/app/components/BlogCard";
import { NewsletterHeader } from "@/app/components/NewsletterHeader";
import { blogsData } from "@/app/data/blogs";
import React from "react";
import { useRouter } from "next/navigation";
import Pagination from "@/app/components/pagination/Pagination";
import Link from "next/link";
import { Button } from "antd";

function page() {
  const router = useRouter();
  return (
    <main className="max-w-5xl mx-auto">
      {/* <NewsletterHeader /> */}
      <div className="flex justify-between py-4 gap-4 items-center">
        {/* <x
          id="countries"
          className="w-[30%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {blogsData.map((items) => {
            return <option selected>{items.slug}</option>;
          })}
        </select> */}
          {/* <div className="flex justify-end mb-4 w-full"> */}
        <Button
        onClick={()=>router.push("/")}
          // className="text-sm text-gray-800 hover:underline hover:text-orange-800 hover:border-orange-800 border border-gray-800 px-3 py-1 rounded"
        >
          ← Go to Home
        </Button>
      {/* </div> */}
        <Button
          onClick={() => router.push("/Admin-pages/create-post")}
          // className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Create Post
        </Button>
      </div>
      <div className="border-t">
        {blogsData.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
      <div>
        <Pagination/>
      </div>
    </main>
  );
}

export default page;

// import React from 'react';
// import * as XLSX from 'xlsx';
// import { saveAs } from 'file-saver';
// import { useRouter } from 'next/navigation';
// import { Navigation } from '@/app/components/header/Navigation';

// function BlogsCategories() {
//   const router = useRouter();

//   const data = [
//     { Name: 'John Doe', Age: 28, Department: 'HR' },
//     { Name: 'Jane Smith', Age: 34, Department: 'IT' },
//     { Name: 'Sam Wilson', Age: 40, Department: 'Finance' },
//   ];

//   const handleDownload = () => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'MIS Report');

//     const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
//     const fileName = `MIS_Report_${timestamp}.xlsx`;

//     const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
//     const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
//     saveAs(blob, fileName);
//   };

//   return (
//     <div>
//       <Navigation />

//       <div className="relative px-6 py-10 mt-20">
//         {/* Go Back Button */}
//         <button
//           onClick={() => router.back()}
//           className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//         >
//           Go Back
//         </button>

//         <h2 className="text-2xl font-semibold mb-6">MIS Report</h2>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300 rounded-md">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-4 py-2 border">Name</th>
//                 <th className="px-4 py-2 border">Age</th>
//                 <th className="px-4 py-2 border">Department</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((row, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="px-4 py-2 border">{row.Name}</td>
//                   <td className="px-4 py-2 border">{row.Age}</td>
//                   <td className="px-4 py-2 border">{row.Department}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Download Button */}
//         <button
//           onClick={handleDownload}
//           className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
//         >
//           Download Excel
//         </button>
//       </div>
//     </div>
//   );
// }

// export default BlogsCategories;
