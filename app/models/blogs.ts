import mongoose, { Schema } from "mongoose";
import type { Model } from "mongoose";
import type { JSONContent } from "@tiptap/core";

export interface BlogRecord {
  title: string;
  slug: string;
  summary: string;
  content: JSONContent;
  image: string;
  authorName: string;
  authorEmail: string;
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new Schema<BlogRecord>(
  {
    title: { type: String, required: true, trim: true, maxlength: 140 },
    slug: { type: String, required: true, unique: true, index: true },
    summary: { type: String, required: true, trim: true, maxlength: 500 },
    content: { type: Schema.Types.Mixed, required: true },
    image: { type: String, default: "" },
    authorName: { type: String, required: true, trim: true },
    authorEmail: { type: String, required: true, lowercase: true, trim: true },
  },
  { timestamps: true }
);

const Blog =
  (mongoose.models.Blog as Model<BlogRecord> | undefined) ??
  mongoose.model<BlogRecord>("Blog", blogSchema);

export default Blog;
