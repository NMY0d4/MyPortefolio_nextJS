import Head from 'next/head';
import NavBar from '../components/navbar/NavBar';
import Main from '../components/Main';

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
    </div>
  );
}
