// import { db } from '@/app/services/firebase';
// import { collection, getDocs, orderBy, query } from 'firebase/firestore';

// export async function GET() {
//   try {
//     const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
//     const snapshot = await getDocs(q);
//     const blogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     return new Response(JSON.stringify(blogs));
//   } catch (error:any) {
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// }
