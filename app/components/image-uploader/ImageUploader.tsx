// components/ImageUploader.tsx
"use client";
import React, { useRef } from "react";
import { Editor } from "@tiptap/react";
import { ImagePlus } from "lucide-react";
import { Button } from "../buttons/Button";

export default function ImageUploader({ editor }: { editor: Editor | null }) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      editor.chain().focus().setImage({ src: reader.result as string }).run();
    };
    reader.readAsDataURL(file); // Converts to base64
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => inputRef.current?.click()}
      >
        <ImagePlus className="size-4" />
      </Button>
    </>
  );
}
