import React,{ useEffect } from "react";
import {useRouter} from 'next/router';

const withAuth = (WrappedComponent: React.ComponentType) => {
     const AuthenticatedComponent = (props: any) => {
         const router = useRouter(); 

         useEffect(() =>{
            const user = JSON.parse(localStorage.getItem('user') || '{}'); 
            if(!user || !user.token){
                router.replace('/about'); 
            }  
          
         },[]); 

        return <WrappedComponent {...props} />; 
     };
     return AuthenticatedComponent; 
}; 

export default withAuth; 