import { HorsesIndex } from "./HorsesIndex";
import { HorsesNew } from "./HorsesNew";
import {useState, useEffect } from "react";
import axios from "axios"


export function Content() {

  const [horses, setHorses] = useState([]);
  
  const handleHorsesNew = (theParams) => {
    console.log("handling creating new horse");
    axios.post("http://localhost:3000/horses.json", theParams).then((response) => {
      console.log(response.data)
      setHorses([...horses, response.data]);
      handleHorsesIndex()
    });
  };
  
  const handleHorsesIndex = () => {
    console.log("handling horses index");
    axios.get("http://localhost:3000/horses.json").then((response) => {
      console.log(response.data);
      setHorses(response.data);

    });
  };
  useEffect(handleHorsesIndex, []);
  
  return (
    <main>
      <HorsesNew onCreateHorse={handleHorsesNew} />
      <br/>
      <button id="BRB" onClick={handleHorsesIndex}>Big Red Button</button>
      <HorsesIndex horses={horses} />
    </main>
  )
}