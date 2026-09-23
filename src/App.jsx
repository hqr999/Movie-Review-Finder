import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


const Card = ({title,rating,isCool}) => {
  return(
    <div>
      <h2>{title}</h2>
      <h3>{rating}</h3>
    </div>
  )
}

const App = () => {
  return(
    <div>
     <h2>Functional arrow component</h2>
      <Card title="Star Wars" rating={5} />
      <Card title="Avatar" rating={4}/>
    </div>
  )

}


export default App
