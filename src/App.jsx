import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


const Card = ({title}) => {
  return(
    <div style={{
      border: '1px solid #4b5362',
      padding: '20px',
      margin: '10px',
      backgroundColor: '#31363f',
      borderRadius: '10px',
      minHeight: '100px',
    }}>
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return(
    <div className='card-container'>
      <Card title="Star Wars" rating={5} />
      <Card title="Avatar" rating={4}/>
    </div>
  )

}


export default App
