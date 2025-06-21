import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI in .env.local');
}

// Define a custom type for the global cache object
interface MongooseGlobal {
  conn: typeof mongoose | null;
}

// Use globalThis instead of any
const globalWithMongoose = globalThis as unknown as { mongoose: MongooseGlobal };

globalWithMongoose.mongoose = globalWithMongoose.mongoose || { conn: null };

export async function connectToDatabase() {
  if (globalWithMongoose.mongoose.conn) {
    return globalWithMongoose.mongoose.conn;
  }

  globalWithMongoose.mongoose.conn = await mongoose.connect(MONGODB_URI);

  return globalWithMongoose.mongoose.conn;
}
