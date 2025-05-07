"use client"
import React, { useState } from "react";
import RichTextEditor from "@/app/components/text-editor/Editor";

function page() {
  const [post, setPost] = useState("");

  const onChange = (content: string) => {
    setPost(content);
    console.log(content);
  };
  return (
    <div>
      {" "}
      <RichTextEditor content={post} onChange={onChange} />
    </div>
  );
}

export default page;
