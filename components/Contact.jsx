import React from 'react';
import contactImg from '../public/assets/mailbox.png';
import Image from 'next/image';
import { socialLinks, socialIconClasses } from './ui/socialIcons';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

function Contact() {
  return (
    <div id="contact" className='w-full lg:h-screen'>
      <div className='max-w-contWithXl m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-primary'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* LEFT */}
          <div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-3'>
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
                <p className='py-4'>Full-Stack javascript developer</p>
                <p className='py-4'>
                  I am available for mission or full-time positions. Contact me
                  and let's talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between m-auto py-4'>
                  {socialLinks.map((icon) => (
                    <div
                      key={uuidv4()}
                      className={`${socialIconClasses} p-4 m-icon-size`}
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-6'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  {/* Créer un composant input */}
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      type='text'
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                    />
                  </div>

                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      type='text'
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                    />
                  </div>
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    type='email'
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                  />
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Sublect</label>
                  <input
                    type='email'
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                  />
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-6'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
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
