import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'




const Card = ({title}) => {

  const [hasLiked, setHasLiked] = useState(false);
  const [count, setcount] = useState(0)
  useEffect(() => {
      console.log(`${title} has been liked: ${hasLiked}`);
  },[hasLiked]);
  

  useEffect(() => {
    console.log('Card Rendered')
  },[])

  return(
    <div className='card' onClick={() => setcount(count + 1)}>
      <h2>{title} <br /> {count ? count : null}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ?  '❤️' : '💙'} 
      </button>
    </div>
  )
}

const App = () => {
    


  return(
    <div className='card-container'>
      <Card title="Star Wars" rating={5} />
      <Card title="Avatar" rating={4}/>
      <Card title="Lion King" rating={3} />
    </div>
  )

}


export default App
