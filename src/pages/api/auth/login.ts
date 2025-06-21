import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { connectToDatabase } from "../../../lib/db"; 
import {User} from '../../../lib/users';


const JWT_SECRET = process.env.JWT_SECRET || 'defaultsecret';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'POST')
         return res.status(405).end(); 

    const {email, password}  = req.body; 

    if(!email || !password) 
          return res.status(400).json({
           message: 'Missing credentials'  
        }); 

    await connectToDatabase();
    
    const user = await User.findOne({email});
    if(!user) return res.status(401).json({
         message: 'User not found' 
    }); 

    const isMatch = await bcrypt.compare(password, user.password); 
    if(!isMatch) return res.status(401).json({
         message: 'Invalid password' 
    }); 

    const token = jwt.sign({
         userId: user._id 
    }, 
    JWT_SECRET, {expiresIn: '1h'}); 


    res.status(200).json({
         token, user: {
             id: user._id,
             name: user.name, 
             email: user.email

         }
    }); 


}; 


