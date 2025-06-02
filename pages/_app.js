import Head from 'next/head';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import Footer from '../components/Footer'; // ✅ Importa o rodapé

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
        {/* Font Awesome para ícones */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      <Navbar />
      <ThemeToggle />
      <Component {...pageProps} />
      <Footer /> {/* ✅ Exibe o rodapé abaixo do conteúdo */}
    </>
  );
}
