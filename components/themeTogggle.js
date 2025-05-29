import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="btn-toggle">
      {dark ? '🌞 Claro' : '🌙 Escuro'}
    </button>
  );
}
