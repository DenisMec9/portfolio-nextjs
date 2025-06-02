export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p><strong>Denis Silva</strong> — Desenvolvedor Front-End</p>
        <p>📍 Pernambuco | 🎓 UNICAP | 🚀 Embarque Digital - Porto Digital</p>
        

        <div className="footer-icons">
          <a href="https://www.instagram.com/denis_mec9/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/denis-silva-7b98972bb/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:seuemail@exemplo.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://wa.me/5581988954430" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

        <p className="footer-copy">
          “Código não é apenas lógica — é expressão criativa com propósito.”
        </p>
      </div>
    </footer>
  );
}
