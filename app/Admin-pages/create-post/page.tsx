'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { useState } from 'react';

export default function BlogEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
    ],
    content: "",
  });

  const addImage = () => {
    const url = window.prompt('Enter Image URL');
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Write a Blog</h1>

      {/* Toolbar */}
      <div className="flex gap-2 mb-4">
        <button onClick={() => editor?.chain().focus().toggleBold().run()} className="px-3 py-1 border rounded">
          Bold
        </button>
        <button onClick={() => editor?.chain().focus().toggleItalic().run()} className="px-3 py-1 border rounded">
          Italic
        </button>
        <button onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()} className="px-3 py-1 border rounded">
          H1
        </button>
        <button onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} className="px-3 py-1 border rounded">
          H2
        </button>
        <button onClick={() => editor?.chain().focus().toggleBulletList().run()} className="px-3 py-1 border rounded">
          Bullet List
        </button>
        <button onClick={() => editor?.chain().focus().toggleOrderedList().run()} className="px-3 py-1 border rounded">
          Number List
        </button>
        <button onClick={addImage} className="px-3 py-1 border rounded">
          Insert Image
        </button>
      </div>

      <EditorContent editor={editor} className="border p-4 min-h-[400px]" />
    </div>
  );
}
