import { Fragment } from 'react';
import '../styles/globals.css';
import NavBar from '../components/navbar/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <NavBar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
