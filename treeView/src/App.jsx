import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data, { menus } from './Components/data'
import TreeView from './Components/TreeView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TreeView menus={menus}/>
    </>
  )
}

export default App
