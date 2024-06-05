import { HorsesIndex } from "./HorsesIndex";
import { HorsesNew } from "./HorsesNew";
import {useState, useEffect } from "react";
import axios from "axios"


export function Content() {

  const [horses, setHorses] = useState([]);
  
  const handleHorsesIndex = () => {
    console.log("handling horses index");
    axios.get("http://localhost:3000/horses.json").then((response) => {
      console.log(response.data);
      setHorses(response.data);

    })
  }

  useEffect(handleHorsesIndex, [])

  return (
    <main>
      <HorsesNew/>
      <br/>
      <button id="BRB" onClick={handleHorsesIndex}>Big Red Button</button>
      <HorsesIndex horses={horses}/>
    </main>
  )
}