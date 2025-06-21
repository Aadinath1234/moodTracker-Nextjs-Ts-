import React from 'react';
import Navbar from '../components/Homepage/Navbar/Navbar';
import Footer from '../components/Homepage/Footer/Footer';
import withRedirectIfAuth from '@/components/withRedirectIfAuth';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
       
          <p className="text-lg max-w-xl">
             We&apos;d love to hear from you! Reach out with any questions or feedback.
        </p>

      

        <div>
            You can contact Us At: 30 February 2090 and   phone no. 011-25-53-25-53 
        </div>
        {/* You can add a contact form here later */}
      </main>
      <Footer />
    </>
  );
};

export default withRedirectIfAuth(Contact);
