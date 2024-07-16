import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Review from './components/Review'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='container'>
      <div className='title'>
        <h2>Reviews</h2>
      </div>
      <Review />
    </section>
    </>
  )
}

export default App
