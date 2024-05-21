import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "rushikesh",
    age: 23,
  };
  let newArr = [1, 2, 3, 4];
  return (
    <>
      <Card />
      <Card username="rushi" />
    </>
  );
}

export default App;
