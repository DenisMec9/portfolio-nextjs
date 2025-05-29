import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  useEffect(() => {
    document.title = "Denis | Desenvolvedor Front-End";
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="home-layout">
      <motion.section
        className="hero-section"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        variants={fadeUp}
      >
        <h1>Olá, eu sou <span>Denis</span></h1>
        <h2>Desenvolvedor Front-End</h2>
        <p>Criando soluções modernas com React, Next.js e foco total em performance, acessibilidade e boas práticas de código.</p>
        <a href="/projetos" className="btn-destaque">Veja meus projetos</a>
      </motion.section>
    </main>
  );
}