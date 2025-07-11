
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Meu Portfólio</h1>
        <nav>
          <ul className="nav-links">
            <li><Link href="/">Início</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/projetos">Projetos</Link></li>
            <li><Link href="/jogo">Jogo da Senha</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

