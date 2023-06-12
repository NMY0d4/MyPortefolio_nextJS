import Image from 'next/image';
import React from 'react';
import aboutImg from '../public/assets/about.jpg';
import Link from 'next/link';

const About = () => {
  const dateOfBirth = new Date('1975-07-22'); // Date de naissance au format 'AAAA-MM-JJ'
  const age = Math.floor((Date.now() - dateOfBirth) / (365.25 * 24 * 60 * 60 * 1000));
  return (
    <div id='about' className='w-full p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-primary'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>I am not your normal developer</p>
          <p className='py-2 text-gray-600'>
            Hello everyone, indeed my background is specific since I learn web
            development by passion, I was always attracted by computers and
            programming, I had my first computer (amstrad CPC) at 13 years and I
            started to program in basics with magazines. I wanted to follow a
            school course in this field but in France at that time (yes yes I
            know, I'm {age} years old) there was no curriculum (what I was told
            when I inquired to orient myself), so my course was different (I
            joined the army).
          </p>
          <p className='py-2 text-gray-600'>
            I have always kept a contact with computer science, and after a
            health problem (rupture of the cruciate ligament) in 2020, during my
            convalescence period I started coding via courses on the internet
            first on gamecodeur.fr (2020) or I initiated myself via the creation
            of video games in lua/love2d (I also touched C#/monogame) and I
            found my passion. Then I asked about courses to reorient myself, I
            turned to Web development where I could see that there were career
            opportunities, I validated a first training bac +2 at ESCCI Evreux
            and I specialize since on Javascrip and NextJS with which I take a
            lot of pleasure to code.
          </p>
          <p className='py-2 text-gray-600'>
            Since 2020 I've been coding every day, I've learned a lot but I've
            also understood a lot of things and I'm still moving forward but I
            would really like to invest myself in a professional environment and
            be a strong and performing element for you.
          </p>
          <Link href='/projects'>
            <p className='py-2 text-gray-600 underline cursor-auto hover:cursor-pointer hover:text-secondary'>
              Check out some of my latest project.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            className='rounded-xl'
            src={aboutImg}
            alt='about tech image'
            height={1000}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
