import Head from 'next/head';
import NavBar from '../components/navbar/NavBar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/contact/Contact';
import { SKILLS } from '../data/skillsData';

export default function Home({ skills }) {
  return (
    <div className='flex flex-col gap-1'>
      <Main />
      <About />
      <Skills skills={skills} />
      <Contact />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      skills: SKILLS,
    },
    revalidate: 3600,
  };
}
