import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <h1>Bem-vindo ao meu Portfólio</h1>
      <nav>
        <Link href="/sobre">Sobre</Link> | 
        <Link href="/academica">Acadêmica</Link> | 
        <Link href="/profissional">Profissional</Link> | 
        <Link href="/projetos">Projetos</Link> | 
        <Link href="/jogo">Jogo da Senha</Link>
      </nav>
    </div>
  )
}
