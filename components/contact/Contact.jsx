import React from 'react';
import contactImg from '../../public/assets/mailbox.png';
import Image from 'next/image';
import { socialLinks, socialIconClasses } from '../ui/socialIcons';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import FormContact from './FormContact';
import { RevealList, RevealWrapper } from 'next-reveal';

function Contact() {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-contWithXl m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-primary'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* LEFT */}
          <RevealWrapper
            origin={'left'}
            className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-3'
            delay={0}
          >
            <>
              <div className='lg:p-4 h-full'>
                <div>
                  <Image
                    src={contactImg}
                    alt='avatar Greg contact'
                    className='rounded-xl hover:scale-110 ease-in duration-100 object-contain'
                  />
                </div>
                <div>
                  <h2 className='py-2'>Grégory Marini</h2>
                  <p className='py-4 font-bold'>
                    Full-Stack javascript developer
                  </p>
                  <p className='py-4'>
                    I am available for mission or full-time positions. Contact
                    me and let's talk.
                  </p>
                </div>
                <div>
                  <p className='uppercase pt-8 text-primary'>Connect With Me</p>
                  <div className='flex items-center max-w-[80%] justify-around m-auto py-4'>
                    {socialLinks.map((icon) => (
                      <div
                        key={uuidv4()}
                        className={`${socialIconClasses} p-2 b-icon-size`}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          </RevealWrapper>
          {/* RIGHT */}
          <RevealWrapper
            origin={'right'}
            className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-6'
            delay={200}
          >
            <>
              <div className='p-4'>
                <FormContact />
              </div>
            </>
          </RevealWrapper>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div
              className={`${socialIconClasses} text-primary p-3 b-icon-size`}
            >
              <HiOutlineChevronDoubleUp />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
