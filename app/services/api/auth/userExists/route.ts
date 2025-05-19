import { NextResponse } from "next/server";
import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/models/users";

export async function POST(req: Request) {
  const { email } = await req.json();
  await connectMongoDB();
  const user = await User.findOne({ email });

  return NextResponse.json({ user });
}
