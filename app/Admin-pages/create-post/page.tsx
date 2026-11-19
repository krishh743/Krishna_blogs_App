"use client"
import React, { useState } from "react";
import type { JSONContent } from "@tiptap/core";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import RichTextEditor from "@/app/components/text-editor/Editor";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState<JSONContent | null>(null);
  const [error, setError] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const publishBlog = async () => {
    setError("");

    if (!title.trim() || !summary.trim() || !content) {
      setError("Enter a title, summary, and blog content before publishing.");
      return;
    }

    try {
      setIsPublishing(true);
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, summary, image, content }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to publish blog.");
      }

      router.push(`/all-pages/blogs/${encodeURIComponent(result.blog.slug)}`);
      router.refresh();
    } catch (publishError) {
      console.error("Blog publish error:", publishError);
      setError(
        publishError instanceof Error
          ? publishError.message
          : "Unable to publish blog. Please try again."
      );
    } finally {
      setIsPublishing(false);
    }
  };

  if (status === "loading") {
    return <p className="p-6">Checking your sign-in...</p>;
  }

  if (!session) {
    return (
      <main className="mx-auto max-w-3xl p-6">
        <h1 className="mb-3 text-2xl font-bold">Sign in to create a blog</h1>
        <p>
          Please sign in before creating and publishing a post. You can sign in
          from the home page.
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 rounded-lg bg-purple-700 px-5 py-2 text-white"
        >
          Go to sign in
        </button>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl p-4 md:p-8">
      <h1 className="mb-6 text-3xl font-bold">Create a blog post</h1>
      <div className="mb-6 grid gap-4">
        <label className="grid gap-2 font-medium">
          Title
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={140}
            required
            className="rounded-md border px-3 py-2"
            placeholder="Give your blog a title"
          />
        </label>
        <label className="grid gap-2 font-medium">
          Summary
          <textarea
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            maxLength={500}
            required
            rows={3}
            className="rounded-md border px-3 py-2"
            placeholder="Write a short summary for the blog list"
          />
        </label>
        <label className="grid gap-2 font-medium">
          Cover image URL (optional)
          <input
            value={image}
            onChange={(event) => setImage(event.target.value)}
            type="url"
            maxLength={2048}
            className="rounded-md border px-3 py-2"
            placeholder="https://example.com/image.jpg"
          />
        </label>
      </div>
      {error && (
        <p role="alert" className="mb-4 rounded-md bg-red-50 p-3 text-red-700">
          {error}
        </p>
      )}
      <RichTextEditor
        content=""
        onChange={setContent}
        onPublish={publishBlog}
        isPublishing={isPublishing}
      />
    </main>
  );
}
