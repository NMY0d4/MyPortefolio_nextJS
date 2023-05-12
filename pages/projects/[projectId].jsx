import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { PROJECTS } from '../../projectData';

const ProjectDetail = () => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:w-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image src={PROJECTS[0].backgroundImg} alt='a single image project' />
      </div>
    </div>
  );
};

export default ProjectDetail;
