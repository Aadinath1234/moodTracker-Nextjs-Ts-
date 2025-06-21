// moodtracker/src/pages/about.tsx
import React from 'react';
import Login from '../components/Login/Login';
import withRedirectIfAuth from '@/components/withRedirectIfAuth';


function Loginpage() {
  
  
 
  
  return(
    <div>
        <Login />
    </div>
  )
}

export default withRedirectIfAuth(Loginpage); 
