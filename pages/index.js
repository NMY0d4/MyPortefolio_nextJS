import Head from 'next/head';
import NavBar from '../components/navbar/NavBar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/projects/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Greg | Developper</title>
        <meta
          name='descritpion'
          content="Grégory Marini, développeur FullStack,page d'accueil de mon site portefolio en nextJS"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
