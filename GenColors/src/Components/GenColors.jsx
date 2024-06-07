import React from "react";
import { useState, useEffect } from "react";
import 'boxicons'

function GenColors(){
  const [color, setColor] = useState('#000000')
  const [typeOfColor, setTypeOfColor] = useState('hex')

  function ColorGenerator(length){
    return Math.floor(Math.random() * length)
  }
  function RandomHexColor() {
    const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexColor = '#'
    for (let i=0; i<6; i++){
      hexColor += hex[ColorGenerator(hex.length)]
    }
    setColor(hexColor);
  }

  function RandomRgbColor(){
    const r = ColorGenerator(255)
    const g = ColorGenerator(255)
    const b = ColorGenerator(255)

    setColor(`rgb(${r},${g},${b})`)
  }


  return(
    <div className="wrapper h-screen w-screen overflow-hidden " style={
      {
        background: color,
        
      }}>
      <button className="text-black px-2  rounded-xl mx-3 mt-2 bg-white hover:shadow-md text-2xl" onClick={() => setTypeOfColor('hex')}>HexColor</button>
      <button className="text-black px-2 rounded-xl mx-3 bg-white hover:shadow-md text-2xl" onClick={() => setTypeOfColor('rgb')}>RGB</button>
      <button className="text-black px-2 rounded-xl mx-3 bg-white hover:shadow-md text-2xl" onClick={typeOfColor == 'hex' ? RandomHexColor : RandomRgbColor}>Generate {typeOfColor} color</button>

      {/* Text for current stat */}
      <div className="">
        <h1 className="text-3xl mt-52 bg-white">{typeOfColor == 'hex' ? 'Hex Color ' : 'RGB Color '}</h1>
        <p className="text-3xl bg-white">{color}</p>
        <button onClick={() => navigator.clipboard.writeText(color)} className="text-black bg-white mt-2 hover:shadow-lg rounded-sm px-2 "><box-icon name='copy'></box-icon></button>
      </div>
    </div>
  )

}

export default GenColors