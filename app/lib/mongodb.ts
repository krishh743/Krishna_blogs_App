// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI as string;

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable.");
// }

// let isConnected = false;

// export const connectMongoDB = async () => {
//   if (isConnected) return;

//   try {
//     await mongoose.connect(MONGODB_URI);
//     isConnected = true;
//     console.log("✅ Connected to MongoDB");
//   } catch (error) {
//     console.error("❌ MongoDB connection error:", error);
//     throw error;
//   }
// };

// app/lib/mongodb.ts
// import mongoose from "mongoose";

// export const connectMongoDB = async () => {
//   if (mongoose.connections[0].readyState) return;

//   try {
//     await mongoose.connect(process.env.MONGODB_URI as string, {
//       dbName: "authapp",
//     });
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     throw new Error("MongoDB connection failed");
//   }
// };
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export const connectMongoDB = async () => {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined. Set it in your .env.local file.");
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectMongoDB;
