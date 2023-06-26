import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/contact/Contact';
import { SKILLS } from '../data/skillsData';
import { RevealWrapper } from 'next-reveal';

export default function Home({ skills }) {
  return (
    <div className='flex flex-col gap-1'>
      <RevealWrapper>
        <Main />
      </RevealWrapper>
      <RevealWrapper>
        <About />
      </RevealWrapper>
      <RevealWrapper>
        <Skills skills={skills} />
      </RevealWrapper>
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
