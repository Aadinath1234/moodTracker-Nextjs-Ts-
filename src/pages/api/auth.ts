import realApi from "./realApi";

export const login = async (
      email: string, 
      password: string 
 ) => {
      return realApi.post('/auth/login', {
        email, 
        password 
      }); 
 };


 export const register = async (name: string, 
    email: string, 
    password: string 
 ) => {
      return realApi.post('/auth/register', {
         name, email, password 
      }); 
 }; 


 