import React from 'react'

const Buscar = ({termoBusca, setTermoBusca}) => {
  return(
    <div className="search">
      <div>
        <img src="search.svg" alt="busque" />

        <input 
              type="text" 
              placeholder="Busque por milhares de filmes"
              value={termoBusca}
              onChange={(evento) => setTermoBusca(evento.target.value)}
        />
      </div>
    </div>
  )
}


export default Buscar 