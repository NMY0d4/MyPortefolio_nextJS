import Image from 'next/image';
import React from 'react';
import aboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-fulll md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-primary'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>I am not your normal developer</p>
          <p className='py-2 text-gray-600'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            ratione ipsam necessitatibus facilis nostrum veritatis deleniti
            eaque quae enim rerum officiis minus cum iste saepe eum fugit, harum
            quo aspernatur. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Assumenda, quo doloremque, tempora et repudiandae similique
            corrupti quisquam eos voluptate nihil
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            maiores culpa a laborum vitae dolores architecto ea sint eos, harum
            aliquam. Vitae quo repellendus corporis sed magni saepe laudantium
            eius. architecto qui tempore dicta alias porro? Consequuntur
            temporibus esse architecto.
          </p>
          <p className='py-2 text-gray-600 underline cursor-auto'>
            Check out some of my latest project.
          </p>
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
