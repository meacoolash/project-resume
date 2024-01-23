"use client"
import React from 'react'
import { BsEnvelope } from 'react-icons/bs';
import { PiLinkedinLogo, PiWhatsappLogo } from 'react-icons/pi';

const handleEmailClick = () => {
    const user = 'mikulas';
    const domain = 'stec.sk';
    window.location.href = `mailto:${user}@${domain}`;
};

const handleWhatsAppClick = () => {
    const countryCode = '+421';
    const number = '903988101';
    window.location.href = `https://wa.me/${countryCode}${number}`;
};

const SocialComponent = () => {
    return (
        <div className='mt-16 flex flex-col items-center gap-3'>
            <span className='text-xl font-signika'>Let&apos;s connect, choose the method that&apos;s most convenient for you.</span>
            <div className='flex gap-4 mt-2 text-3xl justify-center'>
                <button className='hover:text-accent' onClick={() => handleEmailClick()} aria-label='Send Email' ><BsEnvelope /></button>
                <a className='hover:text-accent' href="https://www.linkedin.com/in/mikulas-stec/" target='_blank' ><PiLinkedinLogo /></a>
                <button className='hover:text-accent' onClick={handleWhatsAppClick} aria-label='Whatsapp'><PiWhatsappLogo /></button>
            </div>
        </div>
    )
}

export default SocialComponent