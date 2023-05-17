import Head from 'next/head';
import NavBar from '../components/navbar/NavBar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
// import Project from '../components/project';
import Contact from '../components/contact/Contact';

export default function Home() {
  return (
    <div>      
      <Main />
      <About />
      <Skills />
      {/* <Project /> */}
      <Contact />
    </div>
  );
}
