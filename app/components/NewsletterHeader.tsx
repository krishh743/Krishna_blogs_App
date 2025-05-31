"use client";
import Link from "next/link";
import { FiSend } from "react-icons/fi";

export const NewsletterHeader = () => {

  return (
    <div className="flex flex-col items-center justify-center p-10">
  
       <div className="flex justify-end mb-4 w-full">
        <Link
          href="/"
          className="text-sm text-gray-800 hover:underline hover:text-orange-800 hover:border-orange-800 border border-gray-800 px-3 py-1 rounded"
        >
          ← Go to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold mt-4">The Digital K Newsletter</h1>

      <p className="text-gray-500">A newsletter by The Digital K Blog</p>
      <p className="text-xl font-semibold mt-2">1K subscribers</p>

      <div className="flex mt-6 border border-orange-800 rounded">
        <input
          type="email"
          placeholder="Your email"
          className="border rounded-l px-4 py-2 w-72 focus:ring-orange-800 focus:outline-none focus:ring-1"
        />
        {/* className="border border-orange-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-800" */}

        <button className="flex items-center gap-2 border rounded-r px-4 py-2 hover:bg-orange-100">
          <FiSend />
          Get this newsletter
        </button>
      </div>
      <p className="text-xs text-gray-400 mt-2 max-w-md text-center">
        By signing up, you will create a Medium account if you don’t already
        have one. Review our Privacy Policy.
      </p>
    </div>
  );
};
