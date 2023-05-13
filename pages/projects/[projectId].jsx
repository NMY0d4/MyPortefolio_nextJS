import React from 'react';
import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { PROJECTS } from '../../projectData';
import { absoCenter } from '../../components/ui/utilClasses';
import { v4 as uuidv4 } from 'uuid';

const ProjectDetail = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const { title, backgroundImg, description, projectUrl, technologies } =
    PROJECTS[0];

  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={backgroundImg}
          alt='a single image project'
        />
        <div
          className={`absolute top-[70%] max-w-contWithXl w-full text-white z-10 p-2 ${absoCenter}`}
        >
          <h2 className='py-2'>{title}</h2>
          <h3>Node.js / express / mongodb</h3>
        </div>
      </div>

      <div className='max-w-contWithXL mx-auto p-2 grid md:grid-cols-6 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>{description}</p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <button className='px-8 py-2 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-2 md:grid-cols-1'>
              {technologies.map((tech) => (
                <p
                  key={uuidv4()}
                  className='text-gray-600 py-2 flex items-center'
                >
                  <RiRadioButtonFill className='pr-1' />
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectDetail;
