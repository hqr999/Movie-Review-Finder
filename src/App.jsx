import React, { useEffect ,useState } from 'react'
import Buscar from './componentes/Buscar'

const API_URL = 'https://api.themoviedb.org/3'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}
const App = () => {

  const [termoBusca,setTermoBusca] = useState("")

  const [errMsg,setErrMsg] = useState("")
  const fetch_movies = async () => {
    try {
        const endpoint = `${API_URL}/discover/movie?sort_by=popularity.desc`
        
        const resp = await fetch(endpoint,API_OPTS)

        alert(resp)
    } catch (error) {
      console.error(`Erro ao dar fetch nos filmes: ${error}`)
      setErrMsg("Erro ao dar fetch. Por favor volte mais tarde.")
    }
  }

  useEffect(() => {
      fetch_movies()
  },)


  return (
    <main>
      <div className='pattern'>
          <div className="wrapper">
            <header>
              <img src="./hero.png" alt="" />
              <h1>Encontre <span className="text-gradient">Filmes </span>que você gosta sem se aborecer</h1>
                  <Buscar termoBusca={termoBusca} setTermoBusca={setTermoBusca}/>
            </header>
            <section className="all-movies">
              <h2>Todos os filmes</h2>

              {errMsg && <p className='text-red-700'>{errMsg}</p>}
            </section>



            <h1 className="text-white">{termoBusca}</h1>
          </div>
      
      </div>
    </main>
  )
}

export default App