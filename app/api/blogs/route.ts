import { randomBytes } from "crypto";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/app/lib/auth-options";
import { isValidBlogContent } from "@/app/lib/blog-content";
import connectMongoDB from "@/app/lib/mongodb";
import Blog from "@/app/models/blogs";

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function isValidCoverImage(image: string) {
  if (image === "") {
    return true;
  }
  if (image.startsWith("/") && !image.startsWith("//")) {
    return true;
  }
  try {
    const url = new URL(image);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .select("title slug summary image authorName createdAt")
      .lean();

    return NextResponse.json({
      blogs: blogs.map((blog) => ({
        slug: blog.slug,
        title: blog.title,
        summary: blog.summary,
        image: blog.image,
        authorName: blog.authorName,
        date: formatDate(blog.createdAt),
      })),
    });
  } catch (error) {
    console.error("Blog listing error:", error);
    return NextResponse.json(
      { message: "Unable to load blog posts." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON request body." },
      { status: 400 }
    );
  }

  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json(
      { message: "You must be logged in to publish a blog." },
      { status: 401 }
    );
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json(
      { message: "Invalid blog data." },
      { status: 400 }
    );
  }

  const { title, summary, content, image } = body as Record<string, unknown>;

  if (
    typeof title !== "string" ||
    !title.trim() ||
    title.trim().length > 140 ||
    typeof summary !== "string" ||
    !summary.trim() ||
    summary.trim().length > 500 ||
    !isValidBlogContent(content)
  ) {
    return NextResponse.json(
      { message: "Add a title, summary, and blog content before publishing." },
      { status: 400 }
    );
  }

  if (
    image !== undefined &&
    (typeof image !== "string" ||
      image.length > 2048 ||
      !isValidCoverImage(image.trim()))
  ) {
    return NextResponse.json(
      { message: "Cover image must be a valid HTTP(S) URL or local path." },
      { status: 400 }
    );
  }

  try {
    await connectMongoDB();

    const slugBase =
      title
        .trim()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 100) || "blog";
    const slug = `${slugBase}-${randomBytes(4).toString("hex")}`;
    const blog = await Blog.create({
      title: title.trim(),
      slug,
      summary: summary.trim(),
      content,
      image: typeof image === "string" ? image.trim() : "",
      authorName: session.user.name?.trim() || session.user.email,
      authorEmail: session.user.email.trim().toLowerCase(),
    });

    return NextResponse.json(
      {
        blog: {
          slug: blog.slug,
          title: blog.title,
          summary: blog.summary,
          image: blog.image,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Blog creation error:", error);
    return NextResponse.json(
      { message: "Unable to publish blog. Please try again." },
      { status: 500 }
    );
  }
}
