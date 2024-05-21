import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1)
  }
  return (
    <div>
      <h1>Count buttons that update together</h1>
      <Mybutton count={count} onClick={handleClick} />
      <Mybutton count={count} onClick={handleClick} />
    </div>
  )
}

function Mybutton({count, onClick}){
  return (
    <button onClick={onClick} className='bg-black text-white px-2 py-2 rounded-xl mx-2'>
      Count is {count}
    </button>
  )
}


