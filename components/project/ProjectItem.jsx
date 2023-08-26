import React, { useState } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { absoCenter, scale110 } from '../ui/utilClasses';

const ProjectItem = ({ project }) => {
  const { title, technology, backgroundImg, id } = project;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`flex items-center justify-center min-h-[300px] h-[50vh] w-full shadow-xl shadow-gray-400 rounded-xl p-3 group transition duration-500 ${
        isHovered ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-white'
      }`}
    >
      <div
        className={`relative h-full w-full`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          className='rounded-xl'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          src={backgroundImg}
          placeholder='blur'
          alt={`$projet portefolio ${title}`}
        />
        <div
          className={`absolute bg-gradient-to-r w-[60%] md:w-[40%] p-4 rounded-xl from-primary to-secondary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className='text-md xs:text-lg md:text-xl text-white tracking-wider'>
            {title}
          </h3>
          <p className='pb-4 pt-2 text-white'>{technology} project</p>
          <Link href={`/projects/${id}`}>
            <p
              className={`py-3 xs:w-[80%] md:w-[60%] mx-auto rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer ${scale110}`}
            >
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
