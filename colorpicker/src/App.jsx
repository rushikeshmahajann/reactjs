import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color, setColor] = useState("red")

  return (
    <div className='w-100% h-screen duration-200' style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-xl gap-3 bg-white px-3 py-2 rounded-xl">
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded text-black shadow-lg'>RED</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded text-black shadow-lg '>GREEN</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded text-black shadow-lg '>BLUE</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded text-black shadow-lg '>YELLOW</button>
          <button onClick={() => setColor("pink ")} className='outline-none px-4 py-1 rounded text-black shadow-lg '>PINK</button>
        </div>
      </div>
    </div>
  ) 
}

export default App
