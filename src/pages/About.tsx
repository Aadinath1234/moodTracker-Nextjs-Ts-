// moodtracker/src/pages/about.tsx
import React from 'react';
import About from '../components/Homepage/About/About'; // adjust import path
import withRedirectIfAuth from '@/components/withRedirectIfAuth';

function AboutPage() {
  return(
    <div>
        <About />
    </div>
  )
}

export default withRedirectIfAuth(AboutPage);
