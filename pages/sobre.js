import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Sobre() {
  return (
    <section className="secao sobre-completa">
      <div className="sobre-container">
        <img src="/denis.png" alt="Foto de Denis" className="foto-perfil" />

        <div className="sobre-conteudo">
          <h2>👨‍💻 Sobre Mim</h2>
          <p>
            Olá! Me chamo <strong>Denis Silva</strong> e sou apaixonado por desenvolvimento Front-End. Atualmente, estudo <strong>Sistemas para Internet</strong> na <strong>UNICAP</strong> e participo do <strong>Embarque Digital</strong> pelo <strong>Porto Digital</strong>.
          </p>
          <p>
            Já atuei em residências tecnológicas com a <strong>Beg Inovações</strong> e <strong>Ferreira Costa</strong>, onde pude aplicar soluções reais e evoluir como profissional.
          </p>

          <h2>📲 Contato & Redes</h2>
          <ul className="redes">
            <li><FaEnvelope /> <a href="mailto:seuemail@exemplo.com">denisfilho2@exemplo.com</a></li>
            <li><FaWhatsapp /> <a href="https://wa.me/5581988954430" target="_blank" rel="noreferrer">+55 81 98895-4430</a></li>
            <li><FaInstagram /> <a href="https://www.instagram.com/denis_mec9/" target="_blank">@denis_mec9</a></li>
            <li><FaLinkedin /> <a href="https://www.linkedin.com/in/denis-silva-7b98972bb/" target="_blank">LinkedIn</a></li>
            <li><FaGithub /> <a href="https://github.com/DenisMec9" target="_blank">GitHub</a></li>
          </ul>

          <p className="citacao">
            “A tecnologia só faz sentido quando conecta pessoas.” – Bora construir algo incrível? 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
