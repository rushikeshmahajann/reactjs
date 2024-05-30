import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>Rushikesh Mahajan</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
