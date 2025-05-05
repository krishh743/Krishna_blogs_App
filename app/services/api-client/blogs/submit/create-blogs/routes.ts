import { db } from '@/app/services/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export async function POST(req: Request) {
  const { title, content, author } = await req.json();

  try {
    await addDoc(collection(db, 'blogs'), {
      title,
      content,
      author,
      createdAt: Timestamp.now(),
    });
    return new Response(JSON.stringify({ success: true }));
  } catch (error:any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
