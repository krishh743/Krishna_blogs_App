import { auth } from '@/app/services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Email and password required" }), { status: 400 });
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    return new Response(JSON.stringify({ success: true, uid: userCredential.user.uid }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
