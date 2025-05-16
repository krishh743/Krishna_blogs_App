import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectMongoDB } from "@/app/lib/mongodb";
import { NextAuthOptions } from "next-auth";
import User from "@/app/models/users";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password.");
        }
        

        try {
          await connectMongoDB();

          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new Error("No user found with this email.");
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );

          console.log("User found:", user.email);
console.log("Password correct:", isPasswordCorrect);

          if (!isPasswordCorrect) {
            throw new Error("Incorrect password.");
          }

          console.log("User found:", user.email);
console.log("Password correct:", isPasswordCorrect);


          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
          };
        } catch (error) {
          console.error("Authorize error:", error);
          throw new Error("Authorization failed.");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/", // Make sure this exists
    error: "/",  // Optional: Prevent showing /api/auth/error
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
