import { useState  }  from "react";

function App() {

let[counter, setCounter] = useState(0)


  //let counter = 5
  const addValue = () => {
    counter ++;
    console.log("hi");
    setCounter(counter)

  }
  const removeValue = () => {
    if(counter > 0 ){
      counter --
      setCounter(counter)
    }

  }
  const resetCount = () => {
    setCounter(counter = 0)
  }
  return (
    <>
    <h1>Counter</h1>
    <h2>Value : {counter} </h2>
    <button onClick={addValue}>Add value</button>
    <button onClick={removeValue}>Remove value</button>
    <button onClick={resetCount}>Reset</button>
    </>
    
  )
}

export default App
