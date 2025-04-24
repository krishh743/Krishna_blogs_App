'use client';


import { BlogCard } from '@/app/components/BlogCard';
import { NewsletterHeader } from '@/app/components/NewsletterHeader';
import { blogsData } from '@/app/data/blogs';
import React from 'react'

function page() {
  return (
    <main className="max-w-5xl mx-auto">
      <NewsletterHeader />
      <div className="border-t">
        {blogsData.map(blog => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </main>
  )
}

export default page

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
