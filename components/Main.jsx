import React from 'react';
import { socialIconClasses, socialLinks } from './ui/socialIcons';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-contWithXl w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Available and very motivated to build projects
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I'm{' '}
            <span className='text-primary'>
              <Link href='/auth'>Greg</Link>
            </span>
          </h1>
          <h1 className='py-2 text-gray-700'>a Full-Stack web developper</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I'm a full-stack developer with a passion for javascript. Today I'm
            building various projects to improve my skills and understand the
            different aspects of full-js programming. I'm passionate about
            development, I can adapt quickly and easily reach the set goals.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            {socialLinks.map((icon) => (
              <div
                key={uuidv4()}
                className={`${socialIconClasses} p-4 b-icon-size`}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
