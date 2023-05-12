import React from 'react';
import ProjectItem from './ProjectItem';
import { PROJECTS } from '../../projectData';



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
            project={PROJECTS[0]}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
