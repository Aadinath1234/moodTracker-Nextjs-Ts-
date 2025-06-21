import type { NextApiRequest, NextApiResponse } from "next"; 
import bcrypt from 'bcryptjs';
import { connectToDatabase } from "@/lib/db";
import {User} from '../../../lib/users';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') return res.status(405).end(); 

    const {name, email, password} = req.body; 

    if(!name || !email || !password) return res.status(400).json({
          message: "Missing Fields "
    });

     await connectToDatabase();

     const existingUser = await User.findOne({email});
     if(existingUser) return res.status(400).json({
          message: 'User already exists'
     }); 


     const hashedPassword = await bcrypt.hash(password, 10);
     const newUser = await User.create({name, email, password: hashedPassword});

     res.status(201).json({
         message: 'User created ', 
         userId: newUser._id
     }); 
}