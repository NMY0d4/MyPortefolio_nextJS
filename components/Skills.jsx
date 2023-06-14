import { RevealList, RevealWrapper } from 'next-reveal';
import Image from 'next/image';
import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div id='skills' className='w-full p-2'>
      <div className='max-w-contWithXl mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-primary'>Skills</p>
        <h2 className='py-4'>What I can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {skills.map((skill, i) => (
            <RevealWrapper delay={i * 200} key={skill.id}>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      src={skill.img}
                      alt='image represent differents programming skills'
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>{skill.title}</h3>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
