import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNum] = useState(false)
  const [charAllowed, setChar] = useState(false)
  const [password, setPass] = useState("")

  /* Using ref hook */
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*+=[]{}"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      console.log(pass)
    }

    setPass(pass)

  }, [length, numberAllowed, charAllowed, setPass])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 p-2">
        <h1 className='my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden">

          <input type="text" value={password} className='outline-none w-full py-1 px-3'
            placeholder="Password" readOnly ref={passwordRef} />
          <button className='p-2 rounded text-white bg-black ' onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {
              setNum((prev) => !prev)
            }} />
            <label>Numbers</label>
            <input type="checkbox" defaultChecked={charAllowed} id="characterInput" onChange={() => {
              setChar((prev) => !prev)
            }} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
