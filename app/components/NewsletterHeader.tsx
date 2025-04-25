'use client';
import { useRouter } from 'next/navigation';
import { FiSend } from 'react-icons/fi';

export const NewsletterHeader = () => {
      const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center p-10">
         <button
          onClick={() => router.push("/")}
          className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      {/* <div className="bg-yellow-400 p-3 rounded-full">
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="black"><path d="..." /></svg>
      </div> */}
      <h1 className="text-3xl font-bold mt-4">The Digital K Newsletter</h1>
      <p className="text-gray-500">A newsletter by The Digital K Blog</p>
      <p className="text-xl font-semibold mt-2">1K subscribers</p>

      <div className="flex mt-6">
        <input
          type="email"
          placeholder="Your email"
          className="border rounded-l px-4 py-2 w-72"
        />
        <button className="flex items-center gap-2 border rounded-r px-4 py-2 hover:bg-gray-100">
          <FiSend />
          Get this newsletter
        </button>
      </div>
      <p className="text-xs text-gray-400 mt-2 max-w-md text-center">
        By signing up, you will create a Medium account if you don’t already have one. Review our Privacy Policy.
      </p>
    </div>
  );
};
