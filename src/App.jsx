import React, { useEffect, useState } from "react";
import Buscar from "./componentes/Buscar";

const API_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
const App = () => {
  const [termoBusca, setTermoBusca] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [filmesLista, setFilmesLista] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetch_movies = async () => {
    setIsLoading(true);
    setErrMsg("");
    try {
      const endpoint = `${API_URL}/discover/movie?sort_by=popularity.desc`;

      const resp = await fetch(endpoint, API_OPTS);

      if (!resp.ok) {
        throw new Error("Erro ao dar fetch em filmes");
      }

      const data = await resp.json();
      if (data.Response === "false") {
        setErrMsg(data.Error || "Erro ao dar fetch em filmes");
        setFilmesLista([]);
        return;
      }
      setFilmesLista(data.results || []);
    } catch (error) {
      console.error(`Erro ao dar fetch nos filmes: ${error}`);
      setErrMsg("Erro ao dar fetch. Por favor volte mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetch_movies();
  }, []);

  return (
    <main>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="" />
          <h1>
            Encontre <span className="text-gradient">Filmes </span>que você
            gosta sem se aborecer
          </h1>
          <Buscar termoBusca={termoBusca} setTermoBusca={setTermoBusca} />
        </header>
        <section className="all-movies">
          <h2>Todos os filmes</h2>

          {isLoading ? (
            <p className="text-white">Carregando...</p>
          ) : errMsg ? (
            <p className="text-red-600">{errMsg}</p>
          ) : (
            <ul>
              {filmesLista.map((filme) => (
                <p className="text-white">{filme.title}</p>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
