import { useState, useEffect } from "react";
import "./App.css";
import ImageSlider from "./components/imageSlider";


function App(){
  return(
    <>
    <ImageSlider url={"https://picsum.photos/v2/list?"} limit={'5'} page={'1'}/>
    </>
  )
}
export default App