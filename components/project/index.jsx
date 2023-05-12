import React from 'react';
import natoursImg from '../../public/assets/projects/natours.jpg';
import ProjectItem from './ProjectItem';

const Project = () => {
  return (
    <div id='projects' className='w--full'>
      <div className='max-w-contWithXl mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-primary'>
          Projects
        </p>
        <h2 className='py-4'>what I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Natours'
            backgroundImg={natoursImg}
            projectUrl='/natours'
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
