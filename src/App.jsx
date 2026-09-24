import React, { useState } from 'react'
import Buscar from './componentes/Buscar'

const App = () => {

  const [termoBusca,setTermoBusca] = useState("")
  return (
    <main>
      <div className='pattern'>
          <div className="wrapper">
            <header>
              <img src="./hero.png" alt="" />
              <h1>Encontre <span className="text-gradient">Filmes </span>que você gosta sem se aborecer</h1>
            </header>

            <Buscar termoBusca={termoBusca} setTermoBusca={setTermoBusca}/>
            <h1 className="text-white">{termoBusca}</h1>
          </div>
      
      </div>
    </main>
  )
}

export default App