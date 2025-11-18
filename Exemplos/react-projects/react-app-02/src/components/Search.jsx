import { useState } from "react";
import './Search.css';

export default function Search() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function search(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const query = formData.get("query");
    
    if (!query.trim()) {
      setError("Esse campo é obrigatório!");
      setTimeout(() => setError(null), 2000);
      return;
    }
      
    setPending(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(query);
    setPending(false);
  }

  return (
    <form onSubmit={search} className="search-form">
      <label htmlFor="query">Busca:</label>
      <input id="query" name='query' placeholder="Faça sua pesquisa..." disabled={pending} />

      {error && <p className="error">{error}</p>}

      <button type='submit' disabled={pending}>
        {pending ? "Enviando..." : "Search"}
      </button>
    </form>
  );
}
