import React from "react";
import { useState, useEffect } from "react";

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
    <div className="wrapper" style={
      {
        background: color,
        
      }}>
      <button className="text-white" onClick={() => setTypeOfColor('hex')}>HexColor</button>
      <button className="text-white" onClick={() => setTypeOfColor('rgb')}>RGB</button>
      <button className="text-white" onClick={typeOfColor == 'hex' ? RandomHexColor : RandomRgbColor}>Generate {typeOfColor} color</button>

      {/* Text for current stat */}
      <div>
        <h1>{typeOfColor == 'hex' ? 'Hex Color ' : 'RGB Color '}</h1>
        <p>{color}</p>
      </div>
    </div>
  )

}

export default GenColors