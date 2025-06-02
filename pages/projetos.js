export default function Projetos() {
  const projetos = [
    {
      nome: 'Conversores em Next.js',
      descricao: 'Aplicação com conversores de moeda, temperatura e distância.',
      url: 'https://conversores-nextjs.vercel.app/',
    },
    {
      nome: 'Jogo de Dados',
      descricao: 'Jogo interativo tipo Bulls and Cows com frontend dinâmico.',
      url: 'https://pfe-2025.vercel.app/jogo',
    },
    {
      nome: 'CRUD de Despesas',
      descricao: 'Aplicação para cadastrar, editar e excluir despesas (HTML + CSS + JS).',
      url: 'https://web2024-4.vercel.app/atv8-%20CRUD%20de%20Despesas/',
    },
    {
      nome: 'Jogo Senha em JS Puro',
      descricao: 'Mini game de adivinhação com validação em tempo real.',
      url: 'https://web2024-4.vercel.app/Portf%C3%B3lio/Game.html',
    },
  ];

  return (
    <section className="secao">
      <h2>🧩 Missões no GitHub</h2>
      <div className="cards">
        {projetos.map((repo, index) => (
          <div key={index} className="card">
            <h2>{repo.nome}</h2>
            <p>{repo.descricao}</p>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-jogar"
            >
              Explorar 🚀
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
