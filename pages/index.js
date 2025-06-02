import { useEffect } from 'react';
import { motion } from 'framer-motion';
import MatrixBackground from '../components/MatrixBackground';

export default function Home() {
  useEffect(() => {
    document.title = "Denis | Desenvolvedor Front-End";
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="home-layout">
      <section className="hero-section">
        <MatrixBackground />

        <motion.div
          className="hero-content-row"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          variants={fadeUp}
        >
          {/* Imagem do Denis */}
          <div className="hero-img-container">
            <img src="/denis.png" alt="Foto de Denis" className="hero-img" />
          </div>

          {/* Texto de introdução */}
          <div className="hero-text">
            <h1>Olá, eu sou <span>Denis</span></h1>
            <h2>Desenvolvedor Front-End</h2>
            <p>Criando soluções modernas com <strong>React</strong>, <strong>Next.js</strong> e foco total em performance, acessibilidade e boas práticas de código.</p>
            <a href="/projetos" className="btn-destaque">Veja meus projetos</a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
