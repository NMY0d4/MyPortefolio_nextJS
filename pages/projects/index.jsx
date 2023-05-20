import React, { Fragment } from 'react';
import Project from '../../components/project';
import { PROJECTS } from '../../data/projectData';

function Projects({ projects }) {
  return (
    <Fragment>
      <Project projects={projects} />
    </Fragment>
  );
}

export default Projects;

export async function getStaticProps() {
  return {
    props: {
      projects: PROJECTS,
    },
    revalidate: 3600,
  };
}
