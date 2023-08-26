import React, { useEffect } from 'react';
import ProjectItem from './ProjectItem';
import { RevealWrapper } from 'next-reveal';

const Project = ({ projects }) => {
  const reversedProjects = projects.slice().reverse();

  return (
    <div id='projects' className='w--full pt-20'>
      <div className='max-w-contWithXl mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-primary'>
          Projects
        </p>
        <h2 className='py-4'>what I've Built</h2>
        <div className='grid lg:grid-cols-2 gap-8'>
          {reversedProjects.map((project, i) => (
            <RevealWrapper delay={i * 1500} key={project.id}>
              <ProjectItem project={project} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
