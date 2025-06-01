import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../components/ParticlesBackground';

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
        <ParticlesBackground />
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          variants={fadeUp}
        >
          <h1>Olá, eu sou <span>Denis</span></h1>
          <h2>Desenvolvedor Front-End</h2>
          <p>Criando soluções modernas com <strong>React</strong>, <strong>Next.js</strong> e foco total em performance, acessibilidade e boas práticas de código.</p>
          <a href="/projetos" className="btn-destaque">Veja meus projetos</a>
        </motion.div>
      </section>
    </main>
  );
}
