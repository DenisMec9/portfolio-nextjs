import { useState } from 'react';

export default function JogoSenha() {
  const [senhaSecreta, setSenhaSecreta] = useState(gerarSenha());
  const [tentativa, setTentativa] = useState('');
  const [resultado, setResultado] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [tentativas, setTentativas] = useState(0);
  const [venceu, setVenceu] = useState(false);

  function gerarSenha() {
    let digitos = [];
    while (digitos.length < 4) {
      let rand = Math.floor(Math.random() * 10);
      if (!digitos.includes(rand)) digitos.push(rand);
    }
    return digitos.join('');
  }

  function verificarTentativa() {
    if (tentativa.length !== 4 || isNaN(tentativa)) {
      setResultado('⚠️ Digite uma senha válida de 4 dígitos!');
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (tentativa[i] === senhaSecreta[i]) {
        bulls++;
      } else if (senhaSecreta.includes(tentativa[i])) {
        cows++;
      }
    }

    setTentativas((prev) => prev + 1);

    if (bulls === 4) {
      setResultado(`✅ Você acertou a senha ${senhaSecreta} em ${tentativas + 1} tentativas!`);
      setVenceu(true);
      setTimeout(() => {
        reiniciarJogo();
      }, 4000);
    } else {
      setResultado(`${bulls} Bulls, ${cows} Cows`);
    }
  }

  function reiniciarJogo() {
    setSenhaSecreta(gerarSenha());
    setTentativa('');
    setResultado('');
    setTentativas(0);
    setMostrarSenha(false);
    setVenceu(false);
  }

  return (
    <div className="jogo-container">
      <h1>Jogo da Senha (Bulls and Cows)</h1>
      <p className="desc">
        Tente adivinhar a senha secreta de 4 dígitos. A cada tentativa, você recebe dicas com “bulls” (acertos na posição) e “cows” (acertos fora da posição).
      </p>

      <input
        type="text"
        className="jogo-input"
        maxLength={4}
        value={tentativa}
        onChange={(e) => setTentativa(e.target.value)}
        placeholder="Ex: 1234"
      />

      <div style={{ marginTop: '1rem' }}>
        <button className="jogo-btn" onClick={verificarTentativa}>Enviar</button>
        <button className="jogo-btn" onClick={() => setMostrarSenha(!mostrarSenha)}>Ver Senha</button>
        <button className="jogo-btn reiniciar" onClick={reiniciarJogo}>🔁 Jogar Novamente</button>
      </div>

      <div className={`jogo-feedback ${venceu ? 'vitoria' : ''}`}>
        {mostrarSenha && <p>Senha: {senhaSecreta}</p>}
        {resultado && <p>{resultado}</p>}
        {!venceu && tentativas > 0 && <p>Tentativas: {tentativas}</p>}
      </div>
    </div>
  );
}
