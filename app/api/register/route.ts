import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import connectMongoDB from "@/app/lib/mongodb";
import User from "@/app/models/users";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    await connectMongoDB();

    // check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}