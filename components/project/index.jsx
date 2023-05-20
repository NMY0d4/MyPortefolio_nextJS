import React from 'react';
import ProjectItem from './ProjectItem';

const Project = ({ projects }) => {
  return (
    <div id='projects' className='w--full pt-20'>
      <div className='max-w-contWithXl mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-primary'>
          Projects
        </p>
        <h2 className='py-4'>what I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />

        ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
