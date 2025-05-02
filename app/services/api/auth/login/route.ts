import { auth } from '@/app/services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return new Response(JSON.stringify({ success: true }));
  } catch (error:any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}
