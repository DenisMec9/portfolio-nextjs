import Head from 'next/head';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Denis | Desenvolvedor Front-End</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <ThemeToggle />
      <Component {...pageProps} />
    </>
  );
}
