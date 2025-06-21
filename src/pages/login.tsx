// moodtracker/src/pages/about.tsx
import React from 'react';
import Login from '../components/Login/Login';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import withRedirectIfAuth from '@/components/withRedirectIfAuth';


function Loginpage() {
  
  
 
  
  return(
    <div>
        <Login />
    </div>
  )
}

export default withRedirectIfAuth(Loginpage); 
