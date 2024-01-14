"use client";
import React from 'react';
import HeaderComponent from '../components/header/HeaderComponent';
import FormComponent from './FormComponent';
import SocialComponent from './SocialComponent';

function Contact() {
  return (

    <div className='flex flex-col justify-center pb-16 relative
      font-monsterrat align-top min-h-screen
      bg-gradient-to-br from-background-from via-background-via to-background-to'
    >
      <div className='absolute top-0 w-full'>
        <HeaderComponent page='contact'/>
      </div>

      <div className="flex justify-center mt-24">
        <div className='w-full mx-6 md:w-1/2'>
          <FormComponent />
          <SocialComponent />
        </div>
      </div>

    </div>
  );
}
export default Contact;
