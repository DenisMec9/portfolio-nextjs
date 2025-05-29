import { useEffect, useState } from 'react';

export default function Projetos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/DenisMec9/repos')
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <div className="container">
      <h1 className="titulo">🕹️ Missões no GitHub</h1>
      <div className="cards">
        {repos.map(repo => (
          <div className="card" key={repo.id}>
            <h2>{repo.name}</h2>
            <p>{repo.description || 'Sem descrição'}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-jogar">
              Explorar 🚀
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
