import axios from 'axios';

const realApi = axios.create({
    //   baseURL: 'https://localhost:3000/api',
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://mood-trackerr.vercel.app/api',  
});

export default realApi; 
