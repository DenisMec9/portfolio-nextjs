import { useState } from 'react'

function gerarSenha() {
  return Math.floor(1000 + Math.random() * 9000).toString()
}

function comparar(senha, tentativa) {
  let bulls = 0, cows = 0
  const senhaArr = senha.split('')
  const tentArr = tentativa.split('')

  tentArr.forEach((dig, idx) => {
    if (dig === senhaArr[idx]) bulls++
    else if (senha.includes(dig)) cows++
  })

  return { bulls, cows }
}

export default function Jogo() {
  const [senha, setSenha] = useState(gerarSenha())
  const [tentativa, setTentativa] = useState('')
  const [tentativas, setTentativas] = useState([])
  const [fim, setFim] = useState(false)

  const jogar = () => {
    if (fim || tentativa.length !== 4) return
    const resultado = comparar(senha, tentativa)
    const novaTentativa = { tentativa, ...resultado }
    const novaLista = [novaTentativa, ...tentativas]
    setTentativas(novaLista)

    if (resultado.bulls === 4 || novaLista.length >= 10) setFim(true)
    setTentativa('')
  }

  const novoJogo = () => {
    setSenha(gerarSenha())
    setTentativas([])
    setTentativa('')
    setFim(false)
  }

  return (
    <div className="container">
      <h1>Jogo da Senha (Bulls and Cows)</h1>
      <input maxLength={4} value={tentativa} onChange={e => setTentativa(e.target.value)} disabled={fim} />
      <button onClick={jogar} disabled={fim}>Enviar</button>
      <button onClick={() => alert(`Senha: ${senha}`)}>Ver Senha</button>
      {fim && <>
        <p>Fim de Jogo: {tentativas[0]?.bulls === 4 ? 'Você acertou!' : 'Tentativas esgotadas!'}</p>
        <button onClick={novoJogo}>Novo Jogo</button>
      </>}
      <ul>
        {tentativas.map((t, i) => (
          <li key={i}>{t.tentativa} - {t.bulls} Bulls, {t.cows} Cows</li>
        ))}
      </ul>
    </div>
  )
}
