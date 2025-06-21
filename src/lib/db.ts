import mongoose, { mongo } from 'mongoose';
import { cache } from 'react';

const MONGODB_URI = process.env.MONGODB_URI || '';

if(!MONGODB_URI) throw new Error('Please define the mongodburi in .env.local');

let cached = (global as any).mongoose || {conn: null};


export async function connectToDatabase() {
     if(cached.conn) return cached.conn; 

     cached.conn = await mongoose.connect(MONGODB_URI);
         

     return cached.conn; 
}