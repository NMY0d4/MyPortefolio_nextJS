import { Fragment } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import NavBar from '../components/navbar/NavBar';
import { SessionProvider } from 'next-auth/react';
import { NotificationContextProvider } from '../store/notification-context';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <NotificationContextProvider>
        <Fragment>
          <Head>
            <title>Greg | Developper</title>
            <link rel='icon' href='/faviconLogo.png'></link>
            <meta
              name='descritpion'
              content="Grégory Marini, développeur FullStack,page d'accueil de mon site portefolio en nextJS"
            />
          </Head>
          <NavBar />

          <Component {...pageProps} />
        </Fragment>
      </NotificationContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
