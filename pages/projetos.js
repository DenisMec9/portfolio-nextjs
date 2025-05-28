import { useEffect, useState } from 'react'

export default function Projetos() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/githubusername/repos')
      .then(res => res.json())
      .then(data => setRepos(data))
  }, [])

  return (
    <div className="container">
      <h1>Projetos no GitHub</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
